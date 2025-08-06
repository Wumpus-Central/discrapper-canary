(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(112724),
    s = n(358221),
    o = n(565799),
    c = n(431328),
    u = n(501655),
    d = n(27931),
    h = n(260979),
    p = n(766015),
    f = n(755515),
    g = n(12779),
    m = n(450369),
    b = n(388032),
    y = n(816395);
let x = {
        singleSpeaker: 424,
        twoSpeakers: 624,
        threeSpeakers: 824
    },
    j = (e, t) => {
        let n = Math.floor(e / t - 8),
            r = Math.floor(n / m.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: r
        };
    },
    _ = (e, t) => (e < x.singleSpeaker ? 1 : e < x.twoSpeakers ? 2 : e < x.threeSpeakers || t ? 3 : 4),
    O = (e) => Math.floor((e - 32) / 102);
function v(e) {
    return e.type === u.Ui.VOICE;
}
let C = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: x, onScroll: C } = e,
        {
            selectedParticipantId: E,
            largeStream: S,
            chatOpen: Z
        } = (0, l.cj)(
            [s.Z],
            () => ({
                selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
                largeStream: s.Z.getStageStreamSize(a.id),
                chatOpen: s.Z.getChatOpen(a.id)
            }),
            [a.id]
        ),
        I = (0, c.Io)(a.id),
        P = (0, c.Rk)(a.id, u.pV.AUDIENCE),
        T = (0, l.e7)([o.Z], () => (null != E ? o.Z.getParticipant(a.id, E) : null)),
        N = (0, c.w8)(a.id, u.pV.SPEAKER),
        R = N.filter(v),
        w = null != N.find((e) => e.type === u.Ui.STREAM),
        A = O(x),
        D = _(x, Z),
        L = {
            [u.pV.SPEAKER]: D,
            [u.pV.AUDIENCE]: A,
            [u.pV.SELECTED]: 1
        },
        k = (0, d.Dx)(a.id),
        [M, U] = (0, d.aP)(a.id, L, k),
        H = [Math.max(null != (t = M[0]) ? t : 1, 1), Math.max(null != (n = M[1]) ? n : 1, 1), M[2]],
        { speakerTileWidth: G, speakerTileHeight: F } = j(x, D),
        B = S ? x - 32 : Math.min(x - 64, 3 * G + 8),
        z = (e) => e === M.length - 1 || (0 === P && 1 === e),
        [V, W] = i.useState(!1),
        [Y, q] = i.useState(!1);
    return (0, r.jsx)(p.Z, {
        sections: H,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === I
                    ? null
                    : (0, r.jsx)(
                          g.Z,
                          {
                              participantCount: I,
                              label: b.intl.string(b.t.CduOk5),
                              className: y.header,
                              onClick: () => W(!V),
                              collapsed: V,
                              speakers: R,
                              channel: a,
                              isStreamLive: w
                          },
                          'speaker-header-'.concat(t)
                      )
                : 2 === t
                  ? 0 === P
                      ? null
                      : (0, r.jsx)(
                            g.Z,
                            {
                                participantCount: P,
                                label: b.intl.string(b.t['3foUu7']),
                                className: y.header,
                                onClick: () => q(!Y),
                                collapsed: Y,
                                channel: a
                            },
                            'audience-header-'.concat(t)
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                l = U[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        'div',
                        {
                            className: y.focusedRow,
                            children: (0, r.jsx)(m.Z, {
                                channel: a,
                                participant: l[0],
                                width: B
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (V) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: G,
                                channel: a,
                                participants: l,
                                selectedParticipant: T
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (Y) return null;
                    return (0, r.jsx)(
                        h.Z,
                        {
                            channel: a,
                            participants: l,
                            maxTiles: A
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? B / m.Q + 8 : 1 === e ? (V ? 0 : F) : 98 * !Y),
        renderFooter: (e) => {
            let { section: t } = e;
            return z(t) ? (0, r.jsx)('div', { className: y.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!z(e)),
        className: y.scroller,
        chunkSize: 60,
        onScroll: C
    });
});
