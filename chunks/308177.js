n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(112724),
    s = n(358221),
    o = n(565799),
    c = n(431328),
    d = n(501655),
    u = n(27931),
    p = n(260979),
    h = n(766015),
    f = n(755515),
    g = n(12779),
    m = n(450369),
    b = n(388032),
    _ = n(307139);
function y(e) {
    return e.type === d.Ui.VOICE;
}
let O = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: O, onScroll: x, popoutType: j } = e,
        {
            selectedParticipantId: v,
            largeStream: C,
            chatOpen: I,
        } = (0, l.cj)(
            [s.Z],
            () => ({
                selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
                largeStream: s.Z.getStageStreamSize(a.id),
                chatOpen: s.Z.getChatOpen(a.id),
            }),
            [a.id],
        ),
        S = (0, c.Io)(a.id),
        E = (0, c.Rk)(a.id, d.pV.AUDIENCE),
        Z = (0, l.e7)([o.Z], () => (null != v ? o.Z.getParticipant(a.id, v) : null)),
        P = (0, c.w8)(a.id, d.pV.SPEAKER),
        T = P.filter(y),
        N = null != P.find((e) => e.type === d.Ui.STREAM),
        R = Math.floor((O - 32) / 102),
        w = O < 424 ? 1 : O < 624 ? 2 : O < 824 || I ? 3 : 4,
        A = {
            [d.pV.SPEAKER]: w,
            [d.pV.AUDIENCE]: R,
            [d.pV.SELECTED]: 1,
        },
        D = (0, u.Dx)(a.id),
        [L, M] = (0, u.aP)(a.id, A, D),
        k = [Math.max(null != (t = L[0]) ? t : 1, 1), Math.max(null != (n = L[1]) ? n : 1, 1), L[2]],
        { speakerTileWidth: U, speakerTileHeight: G } = ((e, t) => {
            let n = Math.floor(e / t - 8),
                r = Math.floor(n / m.Q);
            return {
                speakerTileWidth: n,
                speakerTileHeight: r,
            };
        })(O, w),
        H = C ? O - 32 : Math.min(O - 64, 3 * U + 8),
        F = (e) => e === L.length - 1 || (0 === E && 1 === e),
        [B, V] = i.useState(!1),
        [z, W] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: k,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === S
                    ? null
                    : (0, r.jsx)(
                          g.Z,
                          {
                              participantCount: S,
                              label: b.intl.string(b.t.CduOkx),
                              className: _.header,
                              onClick: () => V(!B),
                              collapsed: B,
                              speakers: T,
                              channel: a,
                              isStreamLive: N,
                          },
                          "speaker-header-".concat(t),
                      )
                : 2 === t
                  ? 0 === E
                      ? null
                      : (0, r.jsx)(
                            g.Z,
                            {
                                participantCount: E,
                                label: b.intl.string(b.t["3foUu5"]),
                                className: _.header,
                                onClick: () => W(!z),
                                collapsed: z,
                                channel: a,
                            },
                            "audience-header-".concat(t),
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                l = M[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        "div",
                        {
                            className: _.focusedRow,
                            children: (0, r.jsx)(m.Z, {
                                channel: a,
                                participant: l[0],
                                width: H,
                                popoutType: j,
                            }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (B) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: U,
                                channel: a,
                                participants: l,
                                selectedParticipant: Z,
                                popoutType: j,
                            }),
                        },
                        "speakers-".concat(t, "-").concat(n),
                    );
                case 2:
                    if (z) return null;
                    return (0, r.jsx)(
                        p.Z,
                        {
                            channel: a,
                            participants: l,
                            maxTiles: R,
                        },
                        "audience-".concat(t, "-").concat(n),
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == M[e][0] ? 0 : 0 === e ? H / m.Q + 8 : 1 === e ? (B ? 0 : G) : 98 * !z),
        renderFooter: (e) => {
            let { section: t } = e;
            return F(t) ? (0, r.jsx)("div", { className: _.spacer }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!F(e)),
        className: _.scroller,
        chunkSize: 60,
        onScroll: x,
    });
});
