n.d(t, {
    Hf: () => O,
    JT: () => S,
    Nk: () => y,
    Qm: () => N,
    VB: () => v,
    Xq: () => E,
    YZ: () => T,
    wi: () => I
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(442837),
    o = n(430824),
    a = n(823379),
    s = n(254711),
    l = n(213459),
    c = n(367790),
    u = n(895924),
    d = n(581364),
    f = n(689079),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t, n) {
    var r, i, o, a;
    if (null == t)
        return {
            application: void 0,
            command: void 0
        };
    let s = l.ZP.getUserState(),
        c = l.ZP.getContextState(e),
        u = Object.values(null != (o = null == (r = s.result) ? void 0 : r.sections) ? o : {}).concat(Object.values(null != (a = null == (i = c.result) ? void 0 : i.sections) ? a : {}));
    if (null != n) {
        let e = u.find((e) => {
            var t;
            return (null == (t = e.descriptor.application) ? void 0 : t.id) === n;
        });
        if (null != e) {
            let n = b(e, t);
            return {
                application: e.descriptor.application,
                command: n
            };
        }
    } else
        for (let e of u) {
            let n = b(e, t);
            if (null != n)
                return {
                    application: e.descriptor.application,
                    command: n
                };
        }
    return {
        application: void 0,
        command: void 0
    };
}
function b(e, t) {
    var n, r, i;
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let o =
        null ==
        (n = Object.values(e.commands).find((e) => {
            var n;
            return (null == (n = e.rootCommand) ? void 0 : n.id) === t;
        }))
            ? void 0
            : n.rootCommand;
    return null != o
        ? (0, d.Z8)({
              rootCommand: o,
              command: o,
              applicationId: null != (i = null == (r = e.descriptor.application) ? void 0 : r.id) ? i : ''
          })
        : void 0;
}
function y(e, t, n) {
    var r, i, o, a, s, c, u, d;
    let f = l.ZP.getUserState(),
        _ = l.ZP.getContextState(e),
        p = l.ZP.getApplicationState(n),
        h = null != (d = null != (u = null == (i = f.result) || null == (r = i.sections) ? void 0 : r[n]) ? u : null == (a = _.result) || null == (o = a.sections) ? void 0 : o[n]) ? d : null == (c = p.result) || null == (s = c.sections) ? void 0 : s[n];
    return null == h ? void 0 : h.descriptor;
}
function v(e, t, n) {
    let r = l.ZP.query(
        e,
        {
            commandTypes: [t],
            text: n
        },
        {
            scoreMethod: c.p.COMMAND_OR_APPLICATION,
            allowFetch: !1
        }
    );
    return {
        commands: r.commands,
        sections: r.descriptors
    };
}
function O(e) {
    let t = l.ZP.getUserState(),
        n = l.ZP.getContextState(e);
    return [null == t ? void 0 : t.result, null == n ? void 0 : n.result];
}
function I(e) {
    let { context: t, filters: n, options: a, allowFetch: c } = e,
        u = 'channel' === t.type ? t.channel.guild_id : null,
        d = (0, i.e7)([o.Z], () => o.Z.getGuild(u), [u]),
        { descriptors: p, commands: m, sectionedCommands: E, loading: b } = (0, l.JK)(t, d, n, g(h({}, a), { allowFetch: c })),
        [y, v] = r.useState(null),
        O = r.useMemo(() => {
            var e;
            return C(null != (e = a.placeholderCount) ? e : 0, n.commandTypes[0]);
        }, [n.commandTypes, a.placeholderCount]);
    return r.useMemo(() => {
        let e = {
            loading: b,
            commands: m,
            activeSections: p,
            commandsByActiveSection: E,
            filteredSectionId: y,
            hasMoreAfter: !1,
            placeholders: b ? O : [],
            sectionDescriptors: p,
            filterSection: (e) => {
                v(e);
            },
            scrollDown: _.dG4
        };
        if (null != y) {
            let t = E.find((e) => e.section.id === y);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (b) {
            let t = E[0];
            if (null != t)
                e.commandsByActiveSection = [
                    {
                        section: t.section,
                        data: [...t.data, ...O]
                    },
                    ...E.slice(1)
                ];
            else {
                let t = s.Tm[f.bi.BUILT_IN];
                (e.activeSections = [t]),
                    (e.commandsByActiveSection = [
                        {
                            section: t,
                            data: O
                        }
                    ]);
            }
            e.commands = [...m, ...O];
        }
        return e;
    }, [b, m, p, E, y, O]);
}
function S(e, t, n) {
    var r;
    let { descriptors: i, commands: o, loading: a } = l.ZP.query(e, t, n),
        c = C(a && null != (r = n.placeholderCount) ? r : 0, t.commandTypes[0]);
    return {
        commands: a ? [...o, ...c] : o,
        sections: a && 0 === i.length ? [s.Tm[f.bi.BUILT_IN]] : i
    };
}
function T(e, t) {
    let n = (0, l.PL)(!0, !0),
        i = (0, l.em)(e, !0, !0);
    return r.useMemo(() => {
        if (null != t) {
            var e, r, o, a;
            for (let s of Object.values(null != (o = null == (e = n.result) ? void 0 : e.sections) ? o : {}).concat(Object.values(null != (a = null == (r = i.result) ? void 0 : r.sections) ? a : {}))) {
                let e = s.commands[t];
                if (null != e)
                    return {
                        command: e,
                        application: s.descriptor.application
                    };
            }
        }
        return {
            command: void 0,
            application: void 0
        };
    }, [i.result, n.result, t]);
}
function N(e, t, n) {
    let i = (0, l.PL)(!0, !0),
        o = (0, l.em)(e, !0, !0);
    return r.useMemo(() => {
        var e, r, s, l, c, u;
        let f = null != (c = null == (r = i.result) || null == (e = r.sections) ? void 0 : e[t]) ? c : null == (s = o.result) ? void 0 : s.sections[t],
            _ = Object.values(null != (u = null == f ? void 0 : f.commands) ? u : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, d.Z8)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId
                          })
                )
                .reduce((e, t) => ((e[t.id] = t), e), {});
        return {
            application: null == f || null == (l = f.descriptor) ? void 0 : l.application,
            commands: n.map((e) => _[e]).filter(a.lm)
        };
    }, [null == i ? void 0 : i.result, null == o ? void 0 : o.result, t, n]);
}
let A = {
    id: 'placeholder-section',
    type: u.Qi.APPLICATION,
    name: ''
};
function C(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(R(r, t));
    return n;
}
function R(e, t) {
    return {
        type: t,
        inputType: u.iw.PLACEHOLDER,
        id: 'placeholder-'.concat(e),
        untranslatedName: '',
        displayName: '',
        untranslatedDescription: '',
        displayDescription: '',
        applicationId: '',
        section: A
    };
}
