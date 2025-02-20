n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(112724),
    a = n(358221),
    s = n(565799),
    c = n(431328),
    u = n(501655),
    d = n(27931),
    p = n(260979),
    h = n(766015),
    f = n(401139),
    m = n(12779),
    g = n(450369),
    b = n(388032),
    _ = n(453798);
let C = (e, t) => {
        let n = Math.floor(e / t - 8),
            r = Math.floor(n / g.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: r
        };
    },
    v = (e, t) => (e < 424 ? 1 : e < 624 ? 2 : e < 824 ? 3 : t ? 3 : 4),
    y = (e) => Math.floor((e - 32) / 102);
function x(e) {
    return e.type === u.Ui.VOICE;
}
let j = (0, o.Z)((e) => {
    var t, n;
    let { channel: o, width: j, onScroll: O } = e,
        {
            selectedParticipantId: N,
            largeStream: E,
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
        I = (0, c.Io)(o.id),
        S = (0, c.Rk)(o.id, u.pV.AUDIENCE),
        Z = (0, l.e7)([s.Z], () => (null != N ? s.Z.getParticipant(o.id, N) : null)),
        T = (0, c.w8)(o.id, u.pV.SPEAKER),
        A = T.filter(x),
        w = null != T.find((e) => e.type === u.Ui.STREAM),
        R = y(j),
        k = v(j, P),
        M = {
            [u.pV.SPEAKER]: k,
            [u.pV.AUDIENCE]: R,
            [u.pV.SELECTED]: 1
        },
        L = (0, d.Dx)(o.id),
        [D, W] = (0, d.aP)(o.id, M, L),
        U = [Math.max(null !== (t = D[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = D[1]) && void 0 !== n ? n : 1, 1), D[2]],
        { speakerTileWidth: B, speakerTileHeight: F } = C(j, k),
        H = E ? j - 32 : Math.min(j - 64, 3 * B + 8),
        G = (e) => e === D.length - 1 || (0 === S && 1 === e),
        [V, z] = i.useState(!1),
        [q, Y] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: U,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === I
                    ? null
                    : (0, r.jsx)(
                          m.Z,
                          {
                              participantCount: I,
                              label: b.NW.string(b.t.CduOk5),
                              className: _.header,
                              onClick: () => z(!V),
                              collapsed: V,
                              speakers: A,
                              channel: o,
                              isStreamLive: w
                          },
                          'speaker-header-'.concat(t)
                      )
                : 2 === t
                  ? 0 === S
                      ? null
                      : (0, r.jsx)(
                            m.Z,
                            {
                                participantCount: S,
                                label: b.NW.string(b.t['3foUu7']),
                                className: _.header,
                                onClick: () => Y(!q),
                                collapsed: q,
                                channel: o
                            },
                            'audience-header-'.concat(t)
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                l = W[t][n];
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
                    if (V) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: B,
                                channel: o,
                                participants: l,
                                selectedParticipant: Z
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (q) return null;
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
        rowHeight: (e) => (null == W[e][0] ? 0 : 0 === e ? H / g.Q + 8 : 1 === e ? (V ? 0 : F) : 98 * !q),
        renderFooter: (e) => {
            let { section: t } = e;
            return G(t) ? (0, r.jsx)('div', { className: _.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!G(e)),
        className: _.scroller,
        chunkSize: 60,
        onScroll: O
    });
});
