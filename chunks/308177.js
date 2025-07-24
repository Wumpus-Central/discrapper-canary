(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(112724),
    o = n(358221),
    s = n(565799),
    c = n(431328),
    u = n(501655),
    d = n(27931),
    p = n(260979),
    h = n(766015),
    f = n(755515),
    m = n(12779),
    g = n(450369),
    b = n(388032),
    _ = n(816395);
let y = {
        singleSpeaker: 424,
        twoSpeakers: 624,
        threeSpeakers: 824
    },
    C = (e, t) => {
        let n = Math.floor(e / t - 8),
            r = Math.floor(n / g.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: r
        };
    },
    x = (e, t) => (e < y.singleSpeaker ? 1 : e < y.twoSpeakers ? 2 : e < y.threeSpeakers || t ? 3 : 4),
    v = (e) => Math.floor((e - 32) / 102);
function j(e) {
    return e.type === u.Ui.VOICE;
}
let O = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: y, onScroll: O } = e,
        {
            selectedParticipantId: E,
            largeStream: S,
            chatOpen: P
        } = (0, l.cj)(
            [o.Z],
            () => ({
                selectedParticipantId: o.Z.getSelectedParticipantId(a.id),
                largeStream: o.Z.getStageStreamSize(a.id),
                chatOpen: o.Z.getChatOpen(a.id)
            }),
            [a.id]
        ),
        I = (0, c.Io)(a.id),
        Z = (0, c.Rk)(a.id, u.pV.AUDIENCE),
        T = (0, l.e7)([s.Z], () => (null != E ? s.Z.getParticipant(a.id, E) : null)),
        N = (0, c.w8)(a.id, u.pV.SPEAKER),
        A = N.filter(j),
        w = null != N.find((e) => e.type === u.Ui.STREAM),
        R = v(y),
        M = x(y, P),
        D = {
            [u.pV.SPEAKER]: M,
            [u.pV.AUDIENCE]: R,
            [u.pV.SELECTED]: 1
        },
        k = (0, d.Dx)(a.id),
        [L, U] = (0, d.aP)(a.id, D, k),
        B = [Math.max(null != (t = L[0]) ? t : 1, 1), Math.max(null != (n = L[1]) ? n : 1, 1), L[2]],
        { speakerTileWidth: F, speakerTileHeight: H } = C(y, M),
        G = S ? y - 32 : Math.min(y - 64, 3 * F + 8),
        V = (e) => e === L.length - 1 || (0 === Z && 1 === e),
        [z, W] = i.useState(!1),
        [Y, q] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: B,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === I
                    ? null
                    : (0, r.jsx)(
                          m.Z,
                          {
                              participantCount: I,
                              label: b.intl.string(b.t.CduOk5),
                              className: _.header,
                              onClick: () => W(!z),
                              collapsed: z,
                              speakers: A,
                              channel: a,
                              isStreamLive: w
                          },
                          'speaker-header-'.concat(t)
                      )
                : 2 === t
                  ? 0 === Z
                      ? null
                      : (0, r.jsx)(
                            m.Z,
                            {
                                participantCount: Z,
                                label: b.intl.string(b.t['3foUu7']),
                                className: _.header,
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
                            className: _.focusedRow,
                            children: (0, r.jsx)(g.Z, {
                                channel: a,
                                participant: l[0],
                                width: G
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (z) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: F,
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
                        p.Z,
                        {
                            channel: a,
                            participants: l,
                            maxTiles: R
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? G / g.Q + 8 : 1 === e ? (z ? 0 : H) : 98 * !Y),
        renderFooter: (e) => {
            let { section: t } = e;
            return V(t) ? (0, r.jsx)('div', { className: _.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!V(e)),
        className: _.scroller,
        chunkSize: 60,
        onScroll: O
    });
});
