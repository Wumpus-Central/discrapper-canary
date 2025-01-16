n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(442837),
    o = n(112724),
    c = n(358221),
    d = n(565799),
    u = n(431328),
    h = n(501655),
    p = n(27931),
    m = n(260979),
    f = n(766015),
    g = n(401139),
    C = n(12779),
    x = n(450369),
    v = n(388032),
    _ = n(38524);
let I = 424,
    E = 624,
    b = 824;
((l = i || (i = {}))[(l.SELECTED = 0)] = 'SELECTED'), (l[(l.SPEAKER = 1)] = 'SPEAKER'), (l[(l.AUDIENCE = 2)] = 'AUDIENCE');
let Z = (e, t) => {
        let n = Math.floor(e / t - 8),
            i = Math.floor(n / x.Q);
        return {
            speakerTileWidth: n,
            speakerTileHeight: i
        };
    },
    S = (e, t) => (e < I ? 1 : e < E ? 2 : e < b ? 3 : t ? 3 : 4),
    N = (e) => Math.floor((e - 32) / 102);
function T(e) {
    return e.type === h.Ui.VOICE;
}
t.Z = (0, o.Z)((e) => {
    var t, n;
    let { channel: i, width: l, onScroll: o } = e,
        {
            selectedParticipantId: I,
            largeStream: E,
            chatOpen: b
        } = (0, s.cj)(
            [c.Z],
            () => ({
                selectedParticipantId: c.Z.getSelectedParticipantId(i.id),
                largeStream: c.Z.getStageStreamSize(i.id),
                chatOpen: c.Z.getChatOpen(i.id)
            }),
            [i.id]
        ),
        j = (0, u.Io)(i.id),
        A = (0, u.Rk)(i.id, h.pV.AUDIENCE),
        y = (0, s.e7)([d.Z], () => (null != I ? d.Z.getParticipant(i.id, I) : null)),
        P = (0, u.w8)(i.id, h.pV.SPEAKER),
        M = P.filter(T),
        R = null != P.find((e) => e.type === h.Ui.STREAM),
        L = N(l),
        k = S(l, b),
        O = {
            [h.pV.SPEAKER]: k,
            [h.pV.AUDIENCE]: L,
            [h.pV.SELECTED]: 1
        },
        D = (0, p.Dx)(i.id),
        [w, B] = (0, p.aP)(i.id, O, D),
        U = [Math.max(null !== (t = w[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = w[1]) && void 0 !== n ? n : 1, 1), w[2]],
        { speakerTileWidth: H, speakerTileHeight: G } = Z(l, k),
        F = E ? l - 32 : Math.min(l - 64, 3 * H + 8),
        V = (e) => e === w.length - 1 || (0 === A && 1 === e),
        [z, W] = a.useState(!1),
        [K, Y] = a.useState(!1);
    return (0, r.jsx)(f.Z, {
        sections: U,
        renderSection: (e) => {
            let { section: t } = e;
            if (1 === t)
                return 0 === j
                    ? null
                    : (0, r.jsx)(
                          C.Z,
                          {
                              participantCount: j,
                              label: v.intl.string(v.t.CduOk5),
                              className: _.header,
                              onClick: () => W(!z),
                              collapsed: z,
                              speakers: M,
                              channel: i,
                              isStreamLive: R
                          },
                          'speaker-header-'.concat(t)
                      );
            if (2 === t)
                return 0 === A
                    ? null
                    : (0, r.jsx)(
                          C.Z,
                          {
                              participantCount: A,
                              label: v.intl.string(v.t['3foUu7']),
                              className: _.header,
                              onClick: () => Y(!K),
                              collapsed: K,
                              channel: i
                          },
                          'audience-header-'.concat(t)
                      );
            return null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                l = B[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        'div',
                        {
                            className: _.focusedRow,
                            children: (0, r.jsx)(x.Z, {
                                channel: i,
                                participant: l[0],
                                width: F
                            })
                        },
                        'selected-participant'
                    );
                case 1:
                    if (z) return null;
                    return (0, r.jsx)(
                        a.Fragment,
                        {
                            children: (0, r.jsx)(g.Z, {
                                tileWidth: H,
                                channel: i,
                                participants: l,
                                selectedParticipant: y
                            })
                        },
                        'speakers-'.concat(t, '-').concat(n)
                    );
                case 2:
                    if (K) return null;
                    return (0, r.jsx)(
                        m.Z,
                        {
                            channel: i,
                            participants: l,
                            maxTiles: L
                        },
                        'audience-'.concat(t, '-').concat(n)
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == B[e][0] ? 0 : 0 === e ? F / x.Q + 8 : 1 === e ? (z ? 0 : G) : K ? 0 : 98),
        renderFooter: (e) => {
            let { section: t } = e;
            return V(t) ? (0, r.jsx)('div', { className: _.spacer }, 'bottom-spacer') : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : V(e) ? 88 : 0),
        className: _.scroller,
        chunkSize: 60,
        onScroll: o
    });
});
