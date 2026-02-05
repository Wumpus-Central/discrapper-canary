l.d(n, { A: () => x });
var t = l(627968),
    i = l(64700),
    a = l(311907),
    r = l(397927),
    d = l(430363),
    s = l(161256),
    u = l(659416),
    o = l(997752),
    c = l(593028),
    A = l(45480),
    g = l(196959),
    h = l(872884),
    E = l(961350),
    I = l(734057),
    b = l(808728),
    f = l(71393),
    C = l(383501),
    m = l(309010),
    p = l(977997),
    D = l(985018),
    S = l(926966);
let T = [u.H9.TIMED, u.H9.GAME, u.H9.VOCAL, u.H9.STREAM, u.H9.VIDEO, u.H9.CHAT];
function x(e) {
    let { user: n, guildId: x, channel: M, context: O } = e,
        v = (0, d.Uk)("useVoiceDareItem"),
        y = (0, a.bG)([E.default], () => E.default.getId()),
        j = n.id === y,
        G = n.isNonUserBot(),
        N = null != O ? (0, r.TId)(O) : void 0,
        B = (0, a.bG)([b.Ay], () => b.Ay.getVocalChannelIds(x).length > 0, [x]),
        L = (0, a.bG)([I.A, b.Ay, f.A, C.A, m.A, p.A], () => (0, h.w)(x, M, [I.A, b.Ay, f.A, C.A, m.A, p.A]), [M, x]),
        U = (0, a.bG)([o.A], () => o.A.getLocalVoiceDare()),
        _ = null != U && U.messageKind === u.cn.OFFER && U.senderId === y && U.targetId === n.id ? U : null,
        P = (0, a.bG)([c.A], () => c.A.getActiveDareStateForUser(n.id), [n.id]),
        R = null != _ && null != P && P.senderId === y && P.dareId === _.dareId ? null : _,
        V = null != P && (P.phase === u.Ob.COMPLETED || P.phase === u.Ob.FAILED || P.phase === u.Ob.CANCELLED),
        k = !!(null != R || (null != P && P.senderId === y && !V)),
        w = i.useCallback(
            (e) => {
                (0, r.mMO)(
                    async () => {
                        let { default: i } = await Promise.all([l.e("28936"), l.e("82653"), l.e("85694")]).then(
                            l.bind(l, 172812),
                        );
                        return (l) => (0, t.jsx)(i, { ...l, targetUser: n, channel: L, guildId: x, kind: e });
                    },
                    { contextKey: N },
                );
            },
            [n, L, x, N],
        );
    if (!(v && !G && (j || k || B))) return null;
    if (j) {
        let e = null != U && U.messageKind === u.cn.STATE ? U : null,
            n = e?.phase === u.Ob.RUNNING,
            l = null != e && (e.phase === u.Ob.COMPLETED || e.phase === u.Ob.FAILED || e.phase === u.Ob.CANCELLED);
        return n || l
            ? (0, t.jsx)(r.rXV, {
                  children: (0, t.jsxs)(r.Drp, {
                      id: "voice-dare-self",
                      label: D.intl.string(S.default.ZASBwL),
                      children: [
                          n &&
                              (0, t.jsx)(r.Drp, {
                                  id: "voice-dare-self-chicken-out",
                                  label: D.intl.string(S.default["AHFbr+"]),
                                  action: () => {
                                      null != e && (0, s.T2)(e);
                                  },
                              }),
                          l &&
                              (0, t.jsx)(r.Drp, {
                                  id: "voice-dare-self-clear",
                                  label: D.intl.string(D.t.VkKicb),
                                  action: () => {
                                      (0, s.qr)();
                                  },
                              }),
                      ],
                  }),
              })
            : null;
    }
    if (k) {
        let e = null != P && P.senderId === y && P.phase === u.Ob.RUNNING;
        return (0, t.jsx)(r.rXV, {
            children: (0, t.jsxs)(r.Drp, {
                id: "voice-dare-active",
                label: D.intl.string(S.default.ZASBwL),
                children: [
                    (0, t.jsx)(r.Drp, {
                        id: "voice-dare-cancel",
                        label: D.intl.string(S.default["loBl/B"]),
                        action: () => {
                            null != R ? (0, s.Tv)(R.dareId) : null == P || V || (0, s.A5)(P);
                        },
                    }),
                    e &&
                        (0, t.jsx)(r.Drp, {
                            id: "voice-dare-complete",
                            label: D.intl.string(S.default.YKHIRm),
                            action: () => {
                                (0, s.Z8)(P);
                            },
                        }),
                ],
            }),
        });
    }
    return (0, t.jsx)(r.rXV, {
        children: (0, t.jsx)(r.Drp, {
            id: "voice-dare",
            label: D.intl.formatToPlainString(S.default.ayHpnN, { username: n.globalName ?? n.username }),
            children: T.map((e) =>
                (0, t.jsx)(
                    r.Drp,
                    {
                        id: `voice-dare-${e}`,
                        label: D.intl.formatToPlainString((0, g.Tw)(e), {}),
                        icon: (0, A.zN)(e, A.rJ.ContextMenu),
                        action: () => w(e),
                    },
                    `voice-dare-${e}`,
                ),
            ),
        }),
    });
}
