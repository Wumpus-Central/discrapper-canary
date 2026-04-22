"use strict";
n.r(t), n.d(t, { default: () => P });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(834730),
    r = n(241326),
    o = n(73153),
    d = n(435183),
    c = n(398590),
    u = n(83257),
    h = n(361739),
    g = n(58149),
    m = n(47167),
    x = n(713654),
    p = n(414618),
    A = n(526132),
    f = n(97469),
    b = n(406704),
    _ = n(544028),
    C = n(95701),
    j = n(291731),
    v = n(176360),
    N = n(863036),
    S = n(734057),
    E = n(576705),
    y = n(994500),
    T = n(287809),
    R = n(203982),
    I = n(608226),
    M = n(654030),
    L = n(955941),
    w = n(865678),
    O = n(159495),
    k = n(652215),
    D = n(985018),
    G = n(181420);
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(k.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class U extends i.PureComponent {
    componentDidMount() {
        B(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        o.h.wait(() => (0, d.VN)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: l,
                section: i,
                canManageRoles: s,
                canManageChannels: a,
                canManageWebhooks: r,
                canUnlinkChannel: o,
            } = this.props;
        (a || s || r || o) &&
        (l !== k.XlH.CLOSED || l === t) &&
        (s || i !== k.p_A.PERMISSIONS) &&
        (r || o || i !== k.p_A.INTEGRATIONS)
            ? i !== n && B(i, n)
            : (0, c.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: s,
            canManageRoles: o,
            canManageChannels: g,
            canDeleteChannels: A,
            canManageWebhooks: f,
            canUnlinkChannel: b,
        } = this.props;
        return null == i
            ? null
            : (0, l.jsx)(u.Ay, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? k.p_A.OVERVIEW,
                  onSetSection: d.c4,
                  onClose: c.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: i,
                              canManageChannels: s,
                              canDeleteChannels: o,
                              canManageWebhooks: u,
                              canUnlinkChannel: g,
                          } = e,
                          A = (0, x.gU)(t),
                          { GUILD_CATEGORY: f } = k.rbe,
                          b = C.Le.has(t.type),
                          _ =
                              t.type === f
                                  ? D.intl.string(D.t.ifbXnL)
                                  : b
                                    ? t.isForumPost()
                                        ? D.intl.string(D.t.nEOg1N)
                                        : D.intl.string(D.t.H7vTe2)
                                    : D.intl.string(D.t["8D8Rsb"]);
                      return [
                          {
                              section: h.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                null != A
                                                    ? (0, l.jsx)(A, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: G.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, T.default, y.A),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: G.L,
                                                          children: (0, m.m1)(n, T.default, y.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : D.intl.string(D.t.XPDhcc),
                          },
                          {
                              section: k.p_A.OVERVIEW,
                              label: D.intl.string(D.t["/dp6yY"]),
                              ariaLabel: D.intl.string(D.t["/dp6yY"]),
                              element: w.A,
                              notice: { element: w.w, stores: [N.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: k.p_A.PERMISSIONS,
                              label: D.intl.string(D.t.xrmhRX),
                              element: p.A,
                              notice: { element: O.$, stores: [v.A] },
                              predicate: () => i && !b,
                          },
                          {
                              section: k.p_A.INSTANT_INVITES,
                              label: D.intl.string(D.t["9F90ic"]),
                              element: L.A,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== f && s && !b && !t.isModeratorReportChannel(),
                          },
                          {
                              section: k.p_A.INTEGRATIONS,
                              label: D.intl.string(D.t.s69NLF),
                              ariaLabel: D.intl.string(D.t.s69NLF),
                              element: M.A,
                              notice: { stores: [j.A], element: M.q },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && C.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: k.p_A.DELETE,
                              onClick() {
                                  (0, I.O)(t, function () {
                                      R._.subscribeOnce(k.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: _,
                              ariaLabel: _,
                              icon: (0, l.jsx)(r.u, { size: "xs", color: "currentColor" }),
                              variant: "destructive",
                              predicate: () => o && !t.isModeratorReportChannel(),
                          },
                      ];
                  })({
                      channel: i,
                      category: s,
                      canManageRoles: o,
                      canManageChannels: g,
                      canDeleteChannels: A,
                      canManageWebhooks: f,
                      canUnlinkChannel: b,
                  }),
              });
    }
}
function P() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([N.A], () => N.A.getProps()),
        n = (0, s.bG)([N.A], () => N.A.getFormState()),
        i = (0, s.bG)([N.A], () => N.A.getSection()),
        a = (0, s.bG)([_.A], () => _.A.theme),
        r = (0, f.NC)(),
        o = (0, b.NI)(e),
        d = (0, b.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([E.A], () => ({
            canManageChannels: E.A.can(k.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && E.A.can(k.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && E.A.can(k.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, A.n)(e, E.A),
        })),
        m = (0, s.bG)([S.A], () => S.A.getChannel(e?.parent_id));
    return (0, l.jsx)(U, {
        channel: e,
        category: m,
        canManageChannels: e?.isThread() ? o : c,
        canDeleteChannels: e?.isThread() ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: a,
        sidebarTheme: r,
        section: i,
        analyticsLocation: t,
    });
}
