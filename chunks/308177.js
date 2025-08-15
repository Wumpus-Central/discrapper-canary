n.d(t, { Z: () => C }), n(388685);
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
    y = n(307139);
function _(e) {
    return e.type === u.Ui.VOICE;
}
let C = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: C, onScroll: x } = e,
        {
            selectedParticipantId: v,
            largeStream: j,
            chatOpen: O,
        } = (0, l.cj)(
            [o.Z],
            () => ({
                selectedParticipantId: o.Z.getSelectedParticipantId(a.id),
                largeStream: o.Z.getStageStreamSize(a.id),
                chatOpen: o.Z.getChatOpen(a.id),
            }),
            [a.id],
        ),
        E = (0, c.Io)(a.id),
        S = (0, c.Rk)(a.id, u.pV.AUDIENCE),
        P = (0, l.e7)([s.Z], () => (null != v ? s.Z.getParticipant(a.id, v) : null)),
        I = (0, c.w8)(a.id, u.pV.SPEAKER),
        Z = I.filter(_),
        T = null != I.find((e) => e.type === u.Ui.STREAM),
        N = Math.floor((C - 32) / 102),
        A = C < 424 ? 1 : C < 624 ? 2 : C < 824 || O ? 3 : 4,
        w = {
            [u.pV.SPEAKER]: A,
            [u.pV.AUDIENCE]: N,
            [u.pV.SELECTED]: 1,
        },
        R = (0, d.Dx)(a.id),
        [M, k] = (0, d.aP)(a.id, w, R),
        D = [Math.max(null != (t = M[0]) ? t : 1, 1), Math.max(null != (n = M[1]) ? n : 1, 1), M[2]],
        { speakerTileWidth: L, speakerTileHeight: U } = ((e, t) => {
            let n = Math.floor(e / t - 8),
                r = Math.floor(n / g.Q);
            return {
                speakerTileWidth: n,
                speakerTileHeight: r,
            };
        })(C, A),
        B = j ? C - 32 : Math.min(C - 64, 3 * L + 8),
        F = (e) => e === M.length - 1 || (0 === S && 1 === e),
        [H, G] = i.useState(!1),
        [V, z] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: D,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === E
                    ? null
                    : (0, r.jsx)(
                          m.Z,
                          {
                              participantCount: E,
                              label: b.intl.string(b.t.CduOk5),
                              className: y.header,
                              onClick: () => G(!H),
                              collapsed: H,
                              speakers: Z,
                              channel: a,
                              isStreamLive: T,
                          },
                          "speaker-header-".concat(t),
                      )
                : 2 === t
                  ? 0 === S
                      ? null
                      : (0, r.jsx)(
                            m.Z,
                            {
                                participantCount: S,
                                label: b.intl.string(b.t["3foUu7"]),
                                className: y.header,
                                onClick: () => z(!V),
                                collapsed: V,
                                channel: a,
                            },
                            "audience-header-".concat(t),
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                l = k[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        "div",
                        {
                            className: y.focusedRow,
                            children: (0, r.jsx)(g.Z, {
                                channel: a,
                                participant: l[0],
                                width: B,
                            }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (H) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: L,
                                channel: a,
                                participants: l,
                                selectedParticipant: P,
                            }),
                        },
                        "speakers-".concat(t, "-").concat(n),
                    );
                case 2:
                    if (V) return null;
                    return (0, r.jsx)(
                        p.Z,
                        {
                            channel: a,
                            participants: l,
                            maxTiles: N,
                        },
                        "audience-".concat(t, "-").concat(n),
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == k[e][0] ? 0 : 0 === e ? B / g.Q + 8 : 1 === e ? (H ? 0 : U) : 98 * !V),
        renderFooter: (e) => {
            let { section: t } = e;
            return F(t) ? (0, r.jsx)("div", { className: y.spacer }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!F(e)),
        className: y.scroller,
        chunkSize: 60,
        onScroll: x,
    });
});
