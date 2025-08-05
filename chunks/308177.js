(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(112724),
    s = n(358221),
    o = n(565799),
    c = n(431328),
    d = n(501655),
    u = n(27931),
    h = n(260979),
    p = n(766015),
    f = n(755515),
    g = n(12779),
    m = n(450369),
    b = n(388032),
    _ = n(816395);
let y = {
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
    O = (e, t) => (e < y.singleSpeaker ? 1 : e < y.twoSpeakers ? 2 : e < y.threeSpeakers || t ? 3 : 4),
    x = (e) => Math.floor((e - 32) / 102);
function v(e) {
    return e.type === d.Ui.VOICE;
}
let C = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: y, onScroll: C } = e,
        {
            selectedParticipantId: E,
            largeStream: Z,
            chatOpen: I
        } = (0, l.cj)(
            [s.Z],
            () => ({
                selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
                largeStream: s.Z.getStageStreamSize(a.id),
                chatOpen: s.Z.getChatOpen(a.id)
            }),
            [a.id]
        ),
        S = (0, c.Io)(a.id),
        P = (0, c.Rk)(a.id, d.pV.AUDIENCE),
        T = (0, l.e7)([o.Z], () => (null != E ? o.Z.getParticipant(a.id, E) : null)),
        N = (0, c.w8)(a.id, d.pV.SPEAKER),
        w = N.filter(v),
        R = null != N.find((e) => e.type === d.Ui.STREAM),
        A = x(y),
        D = O(y, I),
        L = {
            [d.pV.SPEAKER]: D,
            [d.pV.AUDIENCE]: A,
            [d.pV.SELECTED]: 1
        },
        M = (0, u.Dx)(a.id),
        [k, U] = (0, u.aP)(a.id, L, M),
        G = [Math.max(null != (t = k[0]) ? t : 1, 1), Math.max(null != (n = k[1]) ? n : 1, 1), k[2]],
        { speakerTileWidth: F, speakerTileHeight: B } = j(y, D),
        H = Z ? y - 32 : Math.min(y - 64, 3 * F + 8),
        z = (e) => e === k.length - 1 || (0 === P && 1 === e),
        [V, W] = i.useState(!1),
        [Y, K] = i.useState(!1);
    return (0, r.jsx)(p.Z, {
        sections: G,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === S
                    ? null
                    : (0, r.jsx)(
                          g.Z,
                          {
                              participantCount: S,
                              label: b.intl.string(b.t.CduOk5),
                              className: _.header,
                              onClick: () => W(!V),
                              collapsed: V,
                              speakers: w,
                              channel: a,
                              isStreamLive: R
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
                                className: _.header,
                                onClick: () => K(!Y),
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
                            children: (0, r.jsx)(m.Z, {
                                channel: a,
                                participant: l[0],
                                width: H
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
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? H / m.Q + 8 : 1 === e ? (V ? 0 : B) : 98 * !Y),
        renderFooter: (e) => {
            let { section: t } = e;
            return z(t) ? (0, r.jsx)('div', { className: _.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!z(e)),
        className: _.scroller,
        chunkSize: 60,
        onScroll: C
    });
});
