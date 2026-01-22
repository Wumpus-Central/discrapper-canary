n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(456412),
    s = n(313961),
    o = n(63995),
    c = n(113783),
    u = n(69407),
    d = n(224648),
    f = n(694257),
    p = n(927630),
    h = n(120017),
    b = n(779271),
    g = n(763793),
    m = n(985018),
    A = n(827303);

function y(e) {
    return e.type === u.wY.VOICE;
}
let O = (0, a.A)((e) => {
    var t, n;
    let a,
        O,
        { channel: j, width: v, onScroll: x, popoutType: E } = e,
        {
            selectedParticipantId: _,
            largeStream: C,
            chatOpen: S,
        } = (0, i.cf)(
            [s.A],
            () => ({
                selectedParticipantId: s.A.getSelectedParticipantId(j.id),
                largeStream: s.A.getStageStreamSize(j.id),
                chatOpen: s.A.getChatOpen(j.id),
            }),
            [j.id],
        ),
        I = (0, c.uy)(j.id),
        N = (0, c.zy)(j.id, u.ip.AUDIENCE),
        T = (0, i.bG)([o.A], () => (null != _ ? o.A.getParticipant(j.id, _) : null)),
        P = (0, c.E5)(j.id, u.ip.SPEAKER),
        w = P.filter(y),
        R = null != P.find((e) => e.type === u.wY.STREAM),
        D = Math.floor((v - 32) / 102),
        M = v < 424 ? 1 : v < 624 ? 2 : v < 824 || S ? 3 : 4,
        L = {
            [u.ip.SPEAKER]: M,
            [u.ip.AUDIENCE]: D,
            [u.ip.SELECTED]: 1,
        },
        G = (0, d.Uo)(j.id),
        [k, U] = (0, d.RG)(j.id, L, G),
        V = [Math.max(null != (t = k[0]) ? t : 1, 1), Math.max(null != (n = k[1]) ? n : 1, 1), k[2]],
        { speakerTileWidth: F, speakerTileHeight: H } =
            ((O = Math.floor((a = Math.floor(v / M - 8)) / g.i)),
            {
                speakerTileWidth: a,
                speakerTileHeight: O,
            }),
        B = C ? v - 32 : Math.min(v - 64, 3 * F + 8),
        K = (e) => e === k.length - 1 || (0 === N && 1 === e),
        [W, z] = l.useState(!1),
        [Y, q] = l.useState(!1);
    return (0, r.jsx)(p.A, {
        sections: V,
        renderSection: (e) => {
            let { section: t } = e;
            return 1 === t
                ? 0 === I
                    ? null
                    : (0, r.jsx)(
                          b.A,
                          {
                              participantCount: I,
                              label: m.intl.string(m.t.CduOkx),
                              className: A.wx,
                              onClick: () => z(!W),
                              collapsed: W,
                              speakers: w,
                              channel: j,
                              isStreamLive: R,
                          },
                          "speaker-header-".concat(t),
                      )
                : 2 === t
                  ? 0 === N
                      ? null
                      : (0, r.jsx)(
                            b.A,
                            {
                                participantCount: N,
                                label: m.intl.string(m.t["3foUu5"]),
                                className: A.wx,
                                onClick: () => q(!Y),
                                collapsed: Y,
                                channel: j,
                            },
                            "audience-header-".concat(t),
                        )
                  : null;
        },
        sectionHeight: (e) => 48,
        renderRow: (e) => {
            let { section: t, row: n } = e,
                i = U[t][n];
            if ((null == i ? void 0 : i.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === i.length || null == i[0]) return null;
                    return (0, r.jsx)(
                        "div",
                        {
                            className: A.Od,
                            children: (0, r.jsx)(g.A, {
                                channel: j,
                                participant: i[0],
                                width: B,
                                popoutType: E,
                            }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (W) return null;
                    return (0, r.jsx)(
                        l.Fragment,
                        {
                            children: (0, r.jsx)(h.A, {
                                tileWidth: F,
                                channel: j,
                                participants: i,
                                selectedParticipant: T,
                                popoutType: E,
                            }),
                        },
                        "speakers-".concat(t, "-").concat(n),
                    );
                case 2:
                    if (Y) return null;
                    return (0, r.jsx)(
                        f.A,
                        {
                            channel: j,
                            participants: i,
                            maxTiles: D,
                        },
                        "audience-".concat(t, "-").concat(n),
                    );
                default:
                    return null;
            }
        },
        rowHeight: (e) => (null == U[e][0] ? 0 : 0 === e ? B / g.i + 8 : 1 === e ? (W ? 0 : H) : 98 * !Y),
        renderFooter: (e) => {
            let { section: t } = e;
            return K(t)
                ? (0, r.jsx)(
                      "div",
                      {
                          className: A.jH,
                      },
                      "bottom-spacer",
                  )
                : null;
        },
        footerHeight: (e) => (1 === e ? 8 : 0 === e ? 12 : 88 * !!K(e)),
        className: A.XG,
        chunkSize: 60,
        onScroll: x,
    });
});
