n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(456412),
    r = n(313961),
    o = n(63995),
    c = n(113783),
    d = n(69407),
    u = n(224648),
    _ = n(694257),
    A = n(927630),
    p = n(120017),
    h = n(779271),
    g = n(763793),
    m = n(985018),
    x = n(639622);
function f(e) {
    return e.type === d.wY.VOICE;
}
let C = (0, s.A)((e) => {
    let t,
        n,
        { channel: s, width: C, onScroll: E, popoutType: j } = e,
        {
            selectedParticipantId: b,
            largeStream: N,
            chatOpen: T,
        } = (0, a.cf)(
            [r.A],
            () => ({
                selectedParticipantId: r.A.getSelectedParticipantId(s.id),
                largeStream: r.A.getStageStreamSize(s.id),
                chatOpen: r.A.getChatOpen(s.id),
            }),
            [s.id],
        ),
        I = (0, c.uy)(s.id),
        v = (0, c.zy)(s.id, d.ip.AUDIENCE),
        S = (0, a.bG)([o.A], () => (null != b ? o.A.getParticipant(s.id, b) : null)),
        y = (0, c.E5)(s.id, d.ip.SPEAKER),
        O = y.filter(f),
        L = null != y.find((e) => e.type === d.wY.STREAM),
        R = Math.floor((C - 32) / 102),
        U = C < 424 ? 1 : C < 624 ? 2 : C < 824 || T ? 3 : 4,
        w = { [d.ip.SPEAKER]: U, [d.ip.AUDIENCE]: R, [d.ip.SELECTED]: 1 },
        P = (0, u.Uo)(s.id),
        [k, M] = (0, u.RG)(s.id, w, P),
        G = [Math.max(k[0] ?? 1, 1), Math.max(k[1] ?? 1, 1), k[2]],
        { speakerTileWidth: D, speakerTileHeight: V } =
            ((n = Math.floor((t = Math.floor(C / U - 8)) / g.i)), { speakerTileWidth: t, speakerTileHeight: n }),
        B = N ? C - 32 : Math.min(C - 64, 3 * D + 8),
        z = (e) => e === k.length - 1 || (0 === v && 1 === e),
        [K, q] = l.useState(!1),
        [H, F] = l.useState(!1);
    return (0, i.jsx)(A.A, {
        sections: G,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === I
                    ? null
                    : (0, i.jsx)(
                          h.A,
                          {
                              participantCount: I,
                              label: m.intl.string(m.t.CduOkx),
                              className: x.wx,
                              onClick: () => q(!K),
                              collapsed: K,
                              speakers: O,
                              channel: s,
                              isStreamLive: L,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === v
                      ? null
                      : (0, i.jsx)(
                            h.A,
                            {
                                participantCount: v,
                                label: m.intl.string(m.t["3foUu5"]),
                                className: x.wx,
                                onClick: () => F(!H),
                                collapsed: H,
                                channel: s,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                a = M[t][n];
            if (a?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === a.length || null == a[0]) return null;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: x.Od,
                            children: (0, i.jsx)(g.A, { channel: s, participant: a[0], width: B, popoutType: j }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (K) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(p.A, {
                                tileWidth: D,
                                channel: s,
                                participants: a,
                                selectedParticipant: S,
                                popoutType: j,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (H) return null;
                    return (0, i.jsx)(_.A, { channel: s, participants: a, maxTiles: R }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == M[e][0] ? 0 : 0 === e ? B / g.i + 8 : 1 === e ? (K ? 0 : V) : 98 * !H),
        renderFooter: (e) => {
            let { section: t } = e;
            return z(t) ? (0, i.jsx)("div", { className: x.jH }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!z(e)),
        className: x.XG,
        chunkSize: 60,
        onScroll: E,
    });
});
