(n.d(t, { Z: () => w }), n(388685));
var r = n(73800),
    i = n(836560),
    a = n(327432),
    o = n(40851),
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
    O = n(618136),
    v = n(247765),
    I = n(15559),
    T = n(42530);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let t = r.useContext(o.ZP),
        n = c.R$.useSetting(),
        [i] = r.useState(() => {
            let r = (0, a.Jh)();
            return (
                (r.children = (0, u.JM)('')),
                (r.selection = {
                    anchor: T.nO,
                    focus: T.nO
                }),
                R(
                    C(A({}, e), {
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
                    (l.Z.removeChangeListener(e), s.ZP.removeChangeListener(e));
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
    let { editor: a, chatInputType: o, channel: s, canUseCommands: l, canOnlyUseTextCommands: c, windowContext: u, previewMarkdown: T, forTests: S, onChangeStart: A, onChangeEnd: N, updateState: C } = e,
        w = a,
        { onChange: R } = w;
    ((w.chatInputType = o),
        (w.windowContext = u),
        (w.previewMarkdown = T),
        (w.composition = null),
        (w.events = new i.EventEmitter()),
        (w.isMac = 'MacIntel' === navigator.platform),
        (w.onChange = () => {
            (w.events.emit('onChange'), R());
        }),
        (w = (0, y.B)(w, !0 === S)),
        (w = (0, b.Z)(w)),
        (w = (0, E.Z)(w)),
        (null == (t = o.commands) ? void 0 : t.enabled) && (w = (0, d.Z)(w, s, !0 === l, !0 === c)),
        (w = (0, g.ZP)(w, s.guild_id, s.id)),
        (null == (n = o.markdown) ? void 0 : n.disableBlockQuotes) || (w = (0, f.Z)(w)),
        (null == (r = o.markdown) ? void 0 : r.disableCodeBlocks) || (w = (0, _.ZP)(w)),
        S && (w = (0, v.Z)(w)),
        (w = (0, m.Z)(w)),
        (w = (0, p.Z)(w)),
        (w = (0, O.Z)(w)),
        (w = (0, I.Z)(w, A, N)),
        (w = (0, h.Z)(w, (e) => {
            let { newValue: t, newSelection: n } = e;
            return C(w, 'undo', {
                value: t,
                selection: n
            });
        })));
}
