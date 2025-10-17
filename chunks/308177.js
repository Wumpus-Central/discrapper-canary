n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(307139);
function _(e) {
    return e.type === d.Ui.VOICE;
}
let j = (0, a.Z)((e) => {
    var t, n;
    let { channel: a, width: j, onScroll: O } = e,
        {
            selectedParticipantId: x,
            largeStream: v,
            chatOpen: C,
        } = (0, l.cj)(
            [s.Z],
            () => ({
                selectedParticipantId: s.Z.getSelectedParticipantId(a.id),
                largeStream: s.Z.getStageStreamSize(a.id),
                chatOpen: s.Z.getChatOpen(a.id),
            }),
            [a.id],
        ),
        I = (0, c.Io)(a.id),
        S = (0, c.Rk)(a.id, d.pV.AUDIENCE),
        E = (0, l.e7)([o.Z], () => (null != x ? o.Z.getParticipant(a.id, x) : null)),
        Z = (0, c.w8)(a.id, d.pV.SPEAKER),
        P = Z.filter(_),
        T = null != Z.find((e) => e.type === d.Ui.STREAM),
        N = Math.floor((j - 32) / 102),
        R = j < 424 ? 1 : j < 624 ? 2 : j < 824 || C ? 3 : 4,
        w = {
            [d.pV.SPEAKER]: R,
            [d.pV.AUDIENCE]: N,
            [d.pV.SELECTED]: 1,
        },
        A = (0, u.Dx)(a.id),
        [D, L] = (0, u.aP)(a.id, w, A),
        M = [Math.max(null != (t = D[0]) ? t : 1, 1), Math.max(null != (n = D[1]) ? n : 1, 1), D[2]],
        { speakerTileWidth: k, speakerTileHeight: U } = ((e, t) => {
            let n = Math.floor(e / t - 8),
                r = Math.floor(n / m.Q);
            return {
                speakerTileWidth: n,
                speakerTileHeight: r,
            };
        })(j, R),
        G = v ? j - 32 : Math.min(j - 64, 3 * k + 8),
        H = (e) => e === D.length - 1 || (0 === S && 1 === e),
        [F, B] = i.useState(!1),
        [V, z] = i.useState(!1);
    return (0, r.jsx)(h.Z, {
        sections: M,
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
                              onClick: () => B(!F),
                              collapsed: F,
                              speakers: P,
                              channel: a,
                              isStreamLive: T,
                          },
                          "speaker-header-".concat(t),
                      )
                : 2 === t
                  ? 0 === S
                      ? null
                      : (0, r.jsx)(
                            g.Z,
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
                l = L[t][n];
            if ((null == l ? void 0 : l.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, r.jsx)(
                        "div",
                        {
                            className: y.focusedRow,
                            children: (0, r.jsx)(m.Z, {
                                channel: a,
                                participant: l[0],
                                width: G,
                            }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (F) return null;
                    return (0, r.jsx)(
                        i.Fragment,
                        {
                            children: (0, r.jsx)(f.Z, {
                                tileWidth: k,
                                channel: a,
                                participants: l,
                                selectedParticipant: E,
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
        rowHeight: (e) => (null == L[e][0] ? 0 : 0 === e ? G / m.Q + 8 : 1 === e ? (F ? 0 : U) : 98 * !V),
        renderFooter: (e) => {
            let { section: t } = e;
            return H(t) ? (0, r.jsx)("div", { className: y.spacer }, "bottom-spacer") : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!H(e)),
        className: y.scroller,
        chunkSize: 60,
        onScroll: O,
    });
});
