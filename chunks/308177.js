n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(112724),
    s = n(358221),
    o = n(565799),
    c = n(431328),
    d = n(501655),
    u = n(27931),
    h = n(260979),
    p = n(766015),
    m = n(401139),
    f = n(12779),
    g = n(450369),
    _ = n(388032),
    C = n(269803);
let x = (e, t) => {
        let n = Math.floor(e / t - 8),
            i = Math.floor(n / g.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: i
        };
    },
    v = (e, t) => (e < 424 ? 1 : e < 624 ? 2 : e < 824 ? 3 : t ? 3 : 4),
    E = (e) => Math.floor((e - 32) / 102);
function I(e) {
    return e.type === d.Ui.VOICE;
}
let b = (0, r.Z)((e) => {
    var t, n;
    let { channel: r, width: b, onScroll: Z } = e,
        {
            selectedParticipantId: N,
            largeStream: T,
            chatOpen: S
        } = (0, a.cj)(
            [s.Z],
            () => ({
                selectedParticipantId: s.Z.getSelectedParticipantId(r.id),
                largeStream: s.Z.getStageStreamSize(r.id),
                chatOpen: s.Z.getChatOpen(r.id)
            }),
            [r.id]
        ),
        j = (0, c.Io)(r.id),
        y = (0, c.Rk)(r.id, d.pV.AUDIENCE),
        A = (0, a.e7)([o.Z], () => (null != N ? o.Z.getParticipant(r.id, N) : null)),
        P = (0, c.w8)(r.id, d.pV.SPEAKER),
        R = P.filter(I),
        M = null != P.find((e) => e.type === d.Ui.STREAM),
        L = E(b),
        k = v(b, S),
        O = {
            [d.pV.SPEAKER]: k,
            [d.pV.AUDIENCE]: L,
            [d.pV.SELECTED]: 1
        },
        D = (0, u.Dx)(r.id),
        [w, U] = (0, u.aP)(r.id, O, D),
        B = [Math.max(null !== (t = w[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = w[1]) && void 0 !== n ? n : 1, 1), w[2]],
        { speakerTileWidth: F, speakerTileHeight: H } = x(b, k),
        G = T ? b - 32 : Math.min(b - 64, 3 * F + 8),
        V = (e) => e === w.length - 1 || (0 === y && 1 === e),
        [z, W] = l.useState(!1),
        [Y, q] = l.useState(!1);
    return (0, i.jsx)(p.Z, {
        sections: B,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === j
                    ? null
                    : (0, i.jsx)(
                          f.Z,
                          {
                              participantCount: j,
                              label: _.intl.string(_.t.CduOk5),
                              className: C.header,
                              onClick: () => W(!z),
                              collapsed: z,
                              speakers: R,
                              channel: r,
                              isStreamLive: M
                          },
                          'speaker-header-'.concat(t)
                      )
                : 2 === t
                  ? 0 === y
                      ? null
                      : (0, i.jsx)(
                            f.Z,
                            {
                                participantCount: y,
                                label: _.intl.string(_.t['3foUu7']),
                                className: C.header,
                                onClick: () => q(!Y),
                                collapsed: Y,
                                channel: r
                            },
                            'audience-header-'.concat(t)
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                a = U[t][n];
            if ((null == a ? void 0 : a.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === a.length || null == a[0]) return null;
                    return (0, i.jsx)(
                        'div',
                        {
                            className: C.focusedRow,
                            children: (0, i.jsx)(g.Z, {
                                channel: r,
                                participant: a[0],
                                width: G
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (z) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(m.Z, {
                                tileWidth: F,
                                channel: r,
                                participants: a,
                                selectedParticipant: A
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (Y) return null;
                    return (0, i.jsx)(
                        h.Z,
                        {
                            channel: r,
                            participants: a,
                            maxTiles: L
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? G / g.Q + 8 : 1 === e ? (z ? 0 : H) : Y ? 0 : 98),
        renderFooter: (e) => {
            let { section: t } = e;
            return V(t) ? (0, i.jsx)('div', { className: C.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : V(e) ? 88 : 0),
        className: C.scroller,
        chunkSize: 60,
        onScroll: Z
    });
});
