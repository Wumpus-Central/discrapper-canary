n.d(t, { Z: () => P }), n(388685);
var r = n(473749),
    i = n(836560),
    a = n(327432),
    o = n(213459),
    s = n(998698),
    l = n(728285),
    c = n(695346),
    u = n(752305),
    d = n(86724),
    f = n(886027),
    p = n(515270),
    _ = n(265446),
    m = n(196483),
    h = n(417662),
    g = n(847302),
    E = n(374157);
n(209073);
var b = n(814011),
    y = n(50607),
    O = n(618136),
    v = n(247765),
    S = n(15559),
    I = n(42530);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let t = r.useContext(l.ZP),
        n = c.R$.useSetting(),
        [i] = r.useState(() => {
            let r = (0, a.Jh)();
            return (
                (r.children = (0, u.JM)("")),
                (r.selection = {
                    anchor: I.nO,
                    focus: I.nO,
                }),
                R(
                    N(A({}, e), {
                        editor: r,
                        windowContext: t,
                        previewMarkdown: n,
                    }),
                ),
                r
            );
        });
    return (
        r.useEffect(() => {
            let e = () => i.onChange();
            return (
                s.Z.addChangeListener(e),
                o.ZP.addChangeListener(e),
                () => {
                    s.Z.removeChangeListener(e), o.ZP.removeChangeListener(e);
                }
            );
        }, [i]),
        r.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}
function R(e) {
    var t, n, r;
    let {
            editor: a,
            chatInputType: o,
            channel: s,
            canUseCommands: l,
            canOnlyUseTextCommands: c,
            windowContext: u,
            previewMarkdown: I,
            forTests: T,
            onChangeStart: A,
            onChangeEnd: C,
            updateState: N,
        } = e,
        P = a,
        { onChange: R } = P;
    (P.chatInputType = o),
        (P.windowContext = u),
        (P.previewMarkdown = I),
        (P.composition = null),
        (P.events = new i.EventEmitter()),
        (P.isMac = "MacIntel" === navigator.platform),
        (P.onChange = () => {
            P.events.emit("onChange"), R();
        }),
        (P = (0, y.B)(P, !0 === T)),
        (P = (0, b.Z)(P)),
        (P = (0, E.Z)(P)),
        (null == (t = o.commands) ? void 0 : t.enabled) && (P = (0, d.Z)(P, s, !0 === l, !0 === c)),
        (P = (0, g.ZP)(P, s.guild_id, s.id)),
        (null == (n = o.markdown) ? void 0 : n.disableBlockQuotes) || (P = (0, f.Z)(P)),
        (null == (r = o.markdown) ? void 0 : r.disableCodeBlocks) || (P = (0, p.ZP)(P)),
        T && (P = (0, v.Z)(P)),
        (P = (0, h.Z)(P)),
        (P = (0, _.Z)(P)),
        (P = (0, O.Z)(P)),
        (P = (0, S.Z)(P, A, C)),
        (P = (0, m.Z)(P, (e) => {
            let { newValue: t, newSelection: n } = e;
            return N(P, "undo", {
                value: t,
                selection: n,
            });
        }));
}
