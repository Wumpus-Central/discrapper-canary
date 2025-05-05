n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(112724),
    a = n(358221),
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
let O = (0, o.Z)((e) => {
    var t, n;
    let { channel: o, width: y, onScroll: O } = e,
        {
            selectedParticipantId: E,
            largeStream: I,
            chatOpen: P
        } = (0, l.cj)(
            [a.Z],
            () => ({
                selectedParticipantId: a.Z.getSelectedParticipantId(o.id),
                largeStream: a.Z.getStageStreamSize(o.id),
                chatOpen: a.Z.getChatOpen(o.id)
            }),
            [o.id]
        ),
        S = (0, c.Io)(o.id),
        Z = (0, c.Rk)(o.id, u.pV.AUDIENCE),
        N = (0, l.e7)([s.Z], () => (null != E ? s.Z.getParticipant(o.id, E) : null)),
        T = (0, c.w8)(o.id, u.pV.SPEAKER),
        A = T.filter(j),
        w = null != T.find((e) => e.type === u.Ui.STREAM),
        R = v(y),
        k = x(y, P),
        M = {
            [u.pV.SPEAKER]: k,
            [u.pV.AUDIENCE]: R,
            [u.pV.SELECTED]: 1
        },
        L = (0, d.Dx)(o.id),
        [D, U] = (0, d.aP)(o.id, M, L),
        B = [Math.max(null != (t = D[0]) ? t : 1, 1), Math.max(null != (n = D[1]) ? n : 1, 1), D[2]],
        { speakerTileWidth: G, speakerTileHeight: F } = C(y, k),
        H = I ? y - 32 : Math.min(y - 64, 3 * G + 8),
        V = (e) => e === D.length - 1 || (0 === Z && 1 === e),
        [z, W] = i.useState(!1),
        [Y, q] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: B,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === S
                    ? null
                    : (0, r.jsx)(
                          m.Z,
                          {
                              participantCount: S,
                              label: b.intl.string(b.t.CduOk5),
                              className: _.header,
                              onClick: () => W(!z),
                              collapsed: z,
                              speakers: A,
                              channel: o,
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
                                channel: o
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
                                channel: o,
                                participant: l[0],
                                width: H
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
                                tileWidth: G,
                                channel: o,
                                participants: l,
                                selectedParticipant: N
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (Y) return null;
                    return (0, r.jsx)(
                        p.Z,
                        {
                            channel: o,
                            participants: l,
                            maxTiles: R
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? H / g.Q + 8 : 1 === e ? (z ? 0 : F) : 98 * !Y),
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
