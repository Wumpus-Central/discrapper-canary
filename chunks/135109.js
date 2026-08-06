a.r(i), a.d(i, { default: () => T });
var d = a(477900),
    l = a(582128),
    n = a(17928),
    t = a(834730),
    s = a(47167),
    c = a(726249),
    r = a(742589),
    o = a(71393),
    u = a(683180),
    h = a(866665),
    p = a(408278),
    x = a(811893),
    m = a(47294),
    v = a(16961),
    I = a(672929),
    g = a(228366),
    A = a(494126),
    _ = a(91242),
    f = a(5867);
async function j(e) {
    null == _.A.getFrame(e) ||
        ((await (0, A.refreshProxyTicket)(e)) &&
            ((0, A.promoteFrame)(e),
            (0, A.updateFramePanelMode)(e, f.Gd.ACTIVITY_POPOUT_WINDOW),
            g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var y = a(165610),
    N = a(818085),
    b = a(375708);
function P(e) {
    let { applicationId: i, surface: a } = e,
        n = (0, I.A)(i, a),
        t = (0, v.G)(),
        s = l.useCallback(() => {
            null != n && (0, m.A)({ onConfirm: () => void j(n.id) });
        }, [n]);
    return t && (0, y.x1)(n)
        ? (0, d.jsx)(h.m, {
              text: b.intl.string(N.default["6g22y7"]),
              ariaHidden: !0,
              children: (0, d.jsx)(p.K, {
                  "aria-label": b.intl.string(N.default["6g22y7"]),
                  icon: x.t,
                  variant: "icon-only",
                  size: "sm",
                  onClick: s,
              }),
          })
        : null;
}
var k = a(750896),
    C = a(957907),
    O = a(448922);
function T(e) {
    let { channel: i } = e,
        a = (0, u.B9)(i.topic),
        h = (0, C.A)(i),
        p = (0, s.Ay)(i),
        x = (0, n.bG)([o.A], () => o.A.getGuild(i.guild_id), [i.guild_id]),
        m = l.useMemo(() => ({ type: y.U4.APP_CHANNEL, channelId: i.id, guildId: i.guild_id ?? void 0 }), [i]);
    return null == a
        ? null
        : (0, d.jsxs)("div", {
              className: O.kL,
              children: [
                  (0, d.jsx)(c.HI, { location: x?.name, subsection: p ?? void 0 }),
                  (0, d.jsx)("div", {
                      className: O.N1,
                      children: (0, d.jsx)(
                          r.A,
                          {
                              guildId: i.guild_id,
                              channelId: i.id,
                              channelType: i.type,
                              hideSearch: !0,
                              toolbar: (0, d.jsx)(P, { applicationId: a, surface: m }),
                              className: O.wx,
                              "aria-label": p ?? void 0,
                              children: (0, d.jsx)(t.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: O.Bv,
                                  children: p,
                              }),
                          },
                          `header-${i.id}`,
                      ),
                  }),
                  (0, d.jsx)("div", {
                      className: O.Ix,
                      "data-vibegrations-channel": !0,
                      children: (0, d.jsx)(k.A, {
                          projectId: h?.id ?? null,
                          applicationId: a,
                          surface: m,
                          chatOpen: !1,
                          previewReady: !0,
                      }),
                  }),
              ],
          });
}
