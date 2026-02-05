n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(456412),
    r = n(313961),
    o = n(63995),
    d = n(113783),
    c = n(69407),
    u = n(224648),
    h = n(694257),
    A = n(927630),
    g = n(120017),
    m = n(779271),
    p = n(763793),
    _ = n(985018),
    x = n(827303);
function f(e) {
    return e.type === c.wY.VOICE;
}
let E = (0, a.A)((e) => {
    let t,
        n,
        { channel: a, width: E, onScroll: C, popoutType: I } = e,
        {
            selectedParticipantId: S,
            largeStream: b,
            chatOpen: N,
        } = (0, s.cf)(
            [r.A],
            () => ({
                selectedParticipantId: r.A.getSelectedParticipantId(a.id),
                largeStream: r.A.getStageStreamSize(a.id),
                chatOpen: r.A.getChatOpen(a.id),
            }),
            [a.id],
        ),
        T = (0, d.uy)(a.id),
        j = (0, d.zy)(a.id, c.ip.AUDIENCE),
        v = (0, s.bG)([o.A], () => (null != S ? o.A.getParticipant(a.id, S) : null)),
        y = (0, d.E5)(a.id, c.ip.SPEAKER),
        R = y.filter(f),
        O = null != y.find((e) => e.type === c.wY.STREAM),
        L = Math.floor((E - 32) / 102),
        D = E < 424 ? 1 : E < 624 ? 2 : E < 824 || N ? 3 : 4,
        M = { [c.ip.SPEAKER]: D, [c.ip.AUDIENCE]: L, [c.ip.SELECTED]: 1 },
        G = (0, u.Uo)(a.id),
        [U, P] = (0, u.RG)(a.id, M, G),
        k = [Math.max(U[0] ?? 1, 1), Math.max(U[1] ?? 1, 1), U[2]],
        { speakerTileWidth: w, speakerTileHeight: V } =
            ((n = Math.floor((t = Math.floor(E / D - 8)) / p.i)), { speakerTileWidth: t, speakerTileHeight: n }),
        B = b ? E - 32 : Math.min(E - 64, 3 * w + 8),
        H = (e) => e === U.length - 1 || (0 === j && 1 === e),
        [F, Y] = l.useState(!1),
        [W, K] = l.useState(!1);
    return (0, i.jsx)(A.A, {
        sections: k,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === T
                    ? null
                    : (0, i.jsx)(
                          m.A,
                          {
                              participantCount: T,
                              label: _.intl.string(_.t.CduOkx),
                              className: x.wx,
                              onClick: () => Y(!F),
                              collapsed: F,
                              speakers: R,
                              channel: a,
                              isStreamLive: O,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === j
                      ? null
                      : (0, i.jsx)(
                            m.A,
                            {
                                participantCount: j,
                                label: _.intl.string(_.t["3foUu5"]),
                                className: x.wx,
                                onClick: () => K(!W),
                                collapsed: W,
                                channel: a,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                s = P[t][n];
            if (s?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === s.length || null == s[0]) return null;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: x.Od,
                            children: (0, i.jsx)(p.A, { channel: a, participant: s[0], width: B, popoutType: I }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (F) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(g.A, {
                                tileWidth: w,
                                channel: a,
                                participants: s,
                                selectedParticipant: v,
                                popoutType: I,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (W) return null;
                    return (0, i.jsx)(h.A, { channel: a, participants: s, maxTiles: L }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == P[e][0] ? 0 : 0 === e ? B / p.i + 8 : 1 === e ? (F ? 0 : V) : 98 * !W),
        renderFooter: (e) => {
            let { section: t } = e;
            return H(t) ? (0, i.jsx)("div", { className: x.jH }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!H(e)),
        className: x.XG,
        chunkSize: 60,
        onScroll: C,
    });
});
