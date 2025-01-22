r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(836560);
var s = r(327432),
    l = r(40851),
    u = r(213459),
    c = r(998698),
    d = r(695346),
    f = r(752305),
    p = r(86724),
    h = r(886027),
    _ = r(515270),
    m = r(265446),
    g = r(196483),
    E = r(417662),
    v = r(847302),
    y = r(374157),
    b = r(814011),
    I = r(50607),
    T = r(618136),
    S = r(247765),
    A = r(15559),
    C = r(42530);
function N(e) {
    let n = a.useContext(l.ZP),
        r = d.R$.useSetting(),
        [i] = a.useState(() => {
            let i = (0, s.Jh)();
            return (
                (i.children = (0, f.JM)('')),
                (i.selection = {
                    anchor: C.nO,
                    focus: C.nO
                }),
                R({
                    ...e,
                    editor: i,
                    windowContext: n,
                    previewMarkdown: r
                }),
                i
            );
        });
    return (
        a.useEffect(() => {
            let e = () => i.onChange();
            return (
                c.Z.addChangeListener(e),
                u.ZP.addChangeListener(e),
                () => {
                    c.Z.removeChangeListener(e), u.ZP.removeChangeListener(e);
                }
            );
        }, [i]),
        a.useEffect(() => {
            i.previewMarkdown !== r && ((i.previewMarkdown = r), i.onChange());
        }, [i, r]),
        i
    );
}
function R(e) {
    var n, r, i;
    let { editor: a, chatInputType: s, channel: l, canUseCommands: u, canOnlyUseTextCommands: c, windowContext: d, previewMarkdown: f, forTests: C, onChangeStart: N, onChangeEnd: R, updateState: O } = e,
        D = a,
        { onChange: x } = D;
    (D.chatInputType = s),
        (D.windowContext = d),
        (D.previewMarkdown = f),
        (D.composition = null),
        (D.events = new o.EventEmitter()),
        (D.isMac = 'MacIntel' === navigator.platform),
        (D.onChange = () => {
            D.events.emit('onChange'), x();
        }),
        (D = (0, I.B)(D, !0 === C)),
        (D = (0, b.Z)(D)),
        (D = (0, y.Z)(D)),
        (null === (n = s.commands) || void 0 === n ? void 0 : n.enabled) && (D = (0, p.Z)(D, l, !0 === u, !0 === c)),
        (D = (0, v.ZP)(D, l.guild_id, l.id)),
        !(null === (r = s.markdown) || void 0 === r ? void 0 : r.disableBlockQuotes) && (D = (0, h.Z)(D)),
        !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (D = (0, _.ZP)(D)),
        C && (D = (0, S.Z)(D)),
        (D = (0, E.Z)(D)),
        (D = (0, m.Z)(D)),
        (D = (0, T.Z)(D)),
        (D = (0, A.Z)(D, N, R)),
        (D = (0, g.Z)(D, (e) => {
            let { newValue: n, newSelection: r } = e;
            return O(D, 'undo', {
                value: n,
                selection: r
            });
        }));
}
