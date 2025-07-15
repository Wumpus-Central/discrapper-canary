(n.d(t, { Z: () => D }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(536895),
    c = n(442837),
    u = n(570140),
    d = n(166459),
    f = n(911969),
    _ = n(607070),
    p = n(209613),
    h = n(998698),
    m = n(117530),
    g = n(459273),
    E = n(444282),
    b = n(898463),
    y = n(981631),
    O = n(650514),
    v = n(283574);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let R = [];
function P(e) {
    let { channelId: t, type: n } = e,
        a = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        I = (0, p.Z)('attachments', l.hy.HORIZONTAL),
        S = (0, c.e7)([m.Z], () => m.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: C,
            commandOptions: P,
            commandOptionStates: w
        } = (0, c.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: R,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        D = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == P
                        ? void 0
                        : P.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == w || null == (t = w[e.name]) ? void 0 : t.hasValue);
                          }))
                ? e
                : [];
        }, [P, w]),
        [L, x] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return (u.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => u.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e));
    }, [t, n]);
    let M = i.useCallback(() => {
        I.focusFirstVisibleItem();
    }, [I]);
    (0, g.yp)({
        event: y.CkL.FOCUS_ATTACHMENT_AREA,
        handler: M
    });
    let k = {
            isApplicationCommand: C,
            previousUploadOptions: L,
            uploadOptions: D
        },
        j = i.useRef(k);
    return (i.useEffect(() => {
        j.current = k;
    }),
    i.useEffect(() => {
        let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = j.current;
        if (e) {
            let e = [];
            (r.forEach((t) => {
                i.some((e) => t.name === e.name) || e.push(t);
            }),
                e.forEach((e) => {
                    d.Z.remove(t, e.name, n.drafts.type);
                }),
                x(i));
        }
    }, [t, D.length, n]),
    (!C && 0 === S.length) || (C && 0 === D.length))
        ? null
        : (0, r.jsx)(s.bG, {
              navigator: I,
              children: (0, r.jsx)(s.SJ, {
                  children: (e) => {
                      var { ref: i } = e,
                          s = N(e, ['ref']);
                      return (0, r.jsx)(
                          'ul',
                          A(T({ ref: i }, s), {
                              className: o()(O.channelAttachmentArea, v.scrollbarGhost),
                              children: C
                                  ? D.map((e) =>
                                        (0, r.jsx)(
                                            E.Z,
                                            {
                                                channelId: t,
                                                keyboardModeEnabled: a,
                                                option: e
                                            },
                                            e.name
                                        )
                                    )
                                  : S.map((e) =>
                                        (0, r.jsx)(
                                            b.Z,
                                            {
                                                channelId: t,
                                                draftType: n.drafts.type,
                                                upload: e,
                                                keyboardModeEnabled: a,
                                                clip: e.clip
                                            },
                                            e.id
                                        )
                                    )
                          })
                      );
                  }
              })
          });
}
function w(e) {
    let { channelId: t, type: n, canAttachFiles: i } = e;
    return i
        ? (0, r.jsx)(P, {
              channelId: t,
              type: n
          })
        : null;
}
let D = i.memo(w);
