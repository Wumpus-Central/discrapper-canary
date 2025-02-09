n.d(t, { Z: () => A }), n(47120);
var i = n(192379),
    r = n(836560),
    a = n(327432),
    s = n(40851),
    o = n(213459),
    l = n(998698),
    u = n(695346),
    c = n(752305),
    d = n(86724),
    f = n(886027),
    _ = n(515270),
    p = n(265446),
    h = n(196483),
    m = n(417662),
    g = n(847302),
    E = n(374157);
n(209073);
var v = n(814011),
    y = n(50607),
    I = n(618136),
    T = n(247765),
    b = n(15559),
    S = n(42530);
function A(e) {
    let t = i.useContext(s.ZP),
        n = u.R$.useSetting(),
        [r] = i.useState(() => {
            let i = (0, a.Jh)();
            return (
                (i.children = (0, c.JM)('')),
                (i.selection = {
                    anchor: S.nO,
                    focus: S.nO
                }),
                N({
                    ...e,
                    editor: i,
                    windowContext: t,
                    previewMarkdown: n
                }),
                i
            );
        });
    return (
        i.useEffect(() => {
            let e = () => r.onChange();
            return (
                l.Z.addChangeListener(e),
                o.ZP.addChangeListener(e),
                () => {
                    l.Z.removeChangeListener(e), o.ZP.removeChangeListener(e);
                }
            );
        }, [r]),
        i.useEffect(() => {
            r.previewMarkdown !== n && ((r.previewMarkdown = n), r.onChange());
        }, [r, n]),
        r
    );
}
function N(e) {
    var t, n, i;
    let { editor: a, chatInputType: s, channel: o, canUseCommands: l, canOnlyUseTextCommands: u, windowContext: c, previewMarkdown: S, forTests: A, onChangeStart: N, onChangeEnd: C, updateState: R } = e,
        O = a,
        { onChange: D } = O;
    (O.chatInputType = s),
        (O.windowContext = c),
        (O.previewMarkdown = S),
        (O.composition = null),
        (O.events = new r.EventEmitter()),
        (O.isMac = 'MacIntel' === navigator.platform),
        (O.onChange = () => {
            O.events.emit('onChange'), D();
        }),
        (O = (0, y.B)(O, !0 === A)),
        (O = (0, v.Z)(O)),
        (O = (0, E.Z)(O)),
        (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (O = (0, d.Z)(O, o, !0 === l, !0 === u)),
        (O = (0, g.ZP)(O, o.guild_id, o.id)),
        (null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) || (O = (0, f.Z)(O)),
        (null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) || (O = (0, _.ZP)(O)),
        A && (O = (0, T.Z)(O)),
        (O = (0, m.Z)(O)),
        (O = (0, p.Z)(O)),
        (O = (0, I.Z)(O)),
        (O = (0, b.Z)(O, N, C)),
        (O = (0, h.Z)(O, (e) => {
            let { newValue: t, newSelection: n } = e;
            return R(O, 'undo', {
                value: t,
                selection: n
            });
        }));
}
