n.d(t, { Z: () => R }), n(47120);
var r = n(192379),
    i = n(836560),
    o = n(327432),
    a = n(40851),
    s = n(213459),
    l = n(998698),
    c = n(695346),
    u = n(752305),
    d = n(86724),
    f = n(886027),
    _ = n(515270),
    p = n(265446),
    h = n(196483),
    m = n(417662),
    g = n(847302),
    E = n(374157);
n(209073);
var b = n(814011),
    y = n(50607),
    v = n(618136),
    O = n(247765),
    I = n(15559),
    S = n(42530);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let t = r.useContext(a.ZP),
        n = c.R$.useSetting(),
        [i] = r.useState(() => {
            let r = (0, o.Jh)();
            return (
                (r.children = (0, u.JM)('')),
                (r.selection = {
                    anchor: S.nO,
                    focus: S.nO
                }),
                P(
                    C(N({}, e), {
                        editor: r,
                        windowContext: t,
                        previewMarkdown: n
                    })
                ),
                r
            );
        });
    return (
        r.useEffect(() => {
            let e = () => i.onChange();
            return (
                l.Z.addChangeListener(e),
                s.ZP.addChangeListener(e),
                () => {
                    l.Z.removeChangeListener(e), s.ZP.removeChangeListener(e);
                }
            );
        }, [i]),
        r.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}
function P(e) {
    var t, n, r;
    let { editor: o, chatInputType: a, channel: s, canUseCommands: l, canOnlyUseTextCommands: c, windowContext: u, previewMarkdown: S, forTests: T, onChangeStart: N, onChangeEnd: A, updateState: C } = e,
        R = o,
        { onChange: P } = R;
    (R.chatInputType = a),
        (R.windowContext = u),
        (R.previewMarkdown = S),
        (R.composition = null),
        (R.events = new i.EventEmitter()),
        (R.isMac = 'MacIntel' === navigator.platform),
        (R.onChange = () => {
            R.events.emit('onChange'), P();
        }),
        (R = (0, y.B)(R, !0 === T)),
        (R = (0, b.Z)(R)),
        (R = (0, E.Z)(R)),
        (null == (t = a.commands) ? void 0 : t.enabled) && (R = (0, d.Z)(R, s, !0 === l, !0 === c)),
        (R = (0, g.ZP)(R, s.guild_id, s.id)),
        (null == (n = a.markdown) ? void 0 : n.disableBlockQuotes) || (R = (0, f.Z)(R)),
        (null == (r = a.markdown) ? void 0 : r.disableCodeBlocks) || (R = (0, _.ZP)(R)),
        T && (R = (0, O.Z)(R)),
        (R = (0, m.Z)(R)),
        (R = (0, p.Z)(R)),
        (R = (0, v.Z)(R)),
        (R = (0, I.Z)(R, N, A)),
        (R = (0, h.Z)(R, (e) => {
            let { newValue: t, newSelection: n } = e;
            return C(R, 'undo', {
                value: t,
                selection: n
            });
        }));
}
