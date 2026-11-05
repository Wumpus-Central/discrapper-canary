o.d(t, { default: () => k });
var n = o(477900),
    i = o(582128),
    c = o(649852),
    s = o.n(c),
    r = o(811315),
    l = o.n(r),
    a = o(164636),
    d = o(430392),
    u = o(39619),
    h = o(836480),
    I = o(101277),
    m = o(173936),
    p = o(687966),
    C = o(834730),
    j = o(165862),
    b = o(477782),
    N = o(921853),
    v = o(583650),
    y = o(320448),
    A = o(71393),
    g = o(351906),
    S = o(509402),
    E = o(406318),
    U = o(221950),
    x = o(11541),
    T = o(620632),
    L = o(652215);
let _ = new Map();
var R = o(792996),
    f = o(709986);
let P = [
    x.UP.DISCOVERY,
    x.UP.VANITY_URL,
    x.UP.BOT,
    x.UP.HUB,
    x.UP.MANUAL_MEMBER_VERIFICATION,
    x.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function w(e) {
    let { type: t, text: o, vanityUrl: i } = e,
        c = (function (e) {
            switch (e) {
                case x.UP.BOT:
                    return (0, n.jsx)(d.RobotIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                case x.UP.INTEGRATION:
                    return (0, n.jsx)(u.WebhookIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                case x.UP.DISCOVERY:
                    return (0, n.jsx)(h.CompassIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                case x.UP.HUB:
                    return (0, n.jsx)(I.HubIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                case x.UP.INVITE:
                case x.UP.VANITY_URL:
                    return (0, n.jsx)(m.LinkIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                case x.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(S.A, { className: f.K, height: 16, width: 16 });
                case x.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, n.jsx)(p.GameControllerIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.K,
                        height: 16,
                        width: 16,
                    });
                default:
                    return null;
            }
        })(t),
        s = (0, x.CI)(t, i);
    return (0, n.jsxs)("div", {
        className: f.$,
        "aria-label": s,
        children: [null != c ? c : null, (0, n.jsx)(C.E, { variant: "body-sm/medium", children: o })],
    });
}
function k(e) {
    let { guildId: t, onClose: o } = e,
        c = (0, a.bG)([E.A], () => E.A.getSearchStateByGuildId(t), [t], l()),
        { inviteCodes: r } = (function (e) {
            let [t, o] = i.useState(_.has(e) ? Array.from(_.get(e)) : []),
                [n, c] = i.useState(!1),
                s = i.useMemo(() => t.map((e) => e.code), [t]),
                r = i.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
                l = i.useCallback(async () => {
                    c(!0);
                    let t = (await T.Bo.get({ url: L.Rsh.GUILD_INSTANT_INVITES(e), rejectWithError: !0 })).body.sort(
                        (e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
                    );
                    (o(t), _.set(e, new Set(t)), c(!1));
                }, [e]);
            return (
                i.useEffect(() => {
                    l();
                }, [e, l]),
                { invitesRaw: t, inviteCodes: s, invitesByCode: r, loading: n }
            );
        })(t),
        d = (0, a.bG)([A.A], () => A.A.getGuild(t)),
        u = d?.vanityURLCode ?? null,
        [h, I] = i.useState(!1),
        { selectedSourceInviteCode: m, selectedJoinSourceType: p } = c,
        C = null != p && p !== x.UP.UNSPECIFIED,
        S = (0, a.bG)([g.A], () => g.A.hideInstantInvites, []);
    S && (r = []);
    let f = i.useMemo(
        () =>
            s()((e) => {
                let o = e.trim();
                (0, U.Ld)(t, { selectedSourceInviteCode: "" !== o ? o : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    i.useEffect(
        () => () => {
            f.cancel();
        },
        [f],
    );
    let k = i.useCallback(
            (e) => {
                let o = e.trim();
                (0, U.Ld)(t, { selectedSourceInviteCode: "" !== o ? o : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        D = i.useCallback(
            (e) => {
                (e === p
                    ? (0, U.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, U.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    I(!1));
            },
            [t, p],
        ),
        O = i.useCallback(
            (e) => {
                ((0, U.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), f(e));
            },
            [t, f],
        );
    return (0, n.jsx)(j.W, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: function () {
            o();
        },
        "aria-label": R.intl.string(R.t["u/7Rdc"]),
        onSelect: L.tEg,
        children: h
            ? (0, n.jsxs)(b.rX, {
                  children: [
                      (0, n.jsx)(b.Dr, {
                          id: "back",
                          iconLeft: N.ChevronSmallLeftIcon,
                          leadingAccessory: { type: "icon", icon: N.ChevronSmallLeftIcon },
                          label: R.intl.string(R.t["Kz/cho"]),
                          action: () => I(!1),
                          dontCloseOnAction: !0,
                      }),
                      P.map((e) =>
                          (0, n.jsx)(
                              b.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, n.jsx)(w, { ...t, type: e, vanityUrl: u, text: (0, x.CI)(e, u, S) }),
                                  checked: p === e,
                                  disabled: !1,
                                  action: () => D(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, n.jsxs)(b.rX, {
                  children: [
                      (0, n.jsx)(
                          b.aK,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, n.jsx)(v.V, {
                                      ...e,
                                      query: m ?? "",
                                      onChange: O,
                                      ref: t,
                                      placeholder: R.intl.string(R.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, n.jsx)(b.bX, {}),
                      (0, n.jsx)(
                          b.iD,
                          {
                              id: "join-source-type-option-all",
                              label: R.intl.string(R.t.an9Ry3),
                              checked: null == m && null == p,
                              disabled: !1,
                              action: () => D(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      r.map((e) =>
                          (0, n.jsx)(
                              b.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, n.jsx)(w, { ...t, type: x.UP.INVITE, vanityUrl: u, text: e }),
                                  checked: m === e,
                                  disabled: !1,
                                  action: () => k(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, n.jsx)(b.bX, {}),
                      (0, n.jsx)(
                          b.Dr,
                          {
                              id: "other-join-methods",
                              label: R.intl.string(R.t["Kz/cho"]),
                              subtext: C ? (0, x.CI)(p, u, S) : void 0,
                              icon: y.ChevronSmallRightIcon,
                              trailingIndicator: { type: "icon", icon: y.ChevronSmallRightIcon },
                              action: () => I(!0),
                              dontCloseOnAction: !0,
                          },
                          "other-join-methods",
                      ),
                  ],
              }),
    });
}
