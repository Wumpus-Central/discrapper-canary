l.d(n, { default: () => k });
var a = l(477900),
    t = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(939249),
    u = l(834730),
    o = l(177953),
    d = l(289873),
    c = l(347704),
    m = l(627363),
    p = l(124077),
    f = l(669610),
    x = l(282831);
function g(e) {
    let { gameOrganization: n, application: l } = e;
    return (0, a.jsx)("img", { className: x.H, src: n.iconUrl ?? l?.getIconURL(96) ?? "", alt: n.name });
}
var S = l(213570),
    h = l(792996),
    b = l(809049);
function j(e) {
    let { gameOrganization: n, application: l, isSelected: i, organizationNoun: d, onClick: c } = e,
        m = (0, t.useMemo)(() => {
            if (null != n.guildId) return S.default.fxZSL6;
            if (n.userIsBlockedFromLink) return S.default["0kSKEH"];
            let e = new Set(n.member.gameOrganizationRoleIds);
            if (!n.roles.some((n) => n.canLink && e.has(n.id))) return S.default.kIqT8Y;
        }, [n]);
    return (0, a.jsxs)(r.D, {
        className: s()(b.zJ, { [b.r9]: null != m, [b.wH]: i }),
        onClick: null == m ? c : void 0,
        children: [
            (0, a.jsx)(g, { gameOrganization: n, application: l }),
            (0, a.jsxs)("div", {
                className: b.gB,
                children: [
                    (0, a.jsx)(u.E, { variant: "body-md/normal", children: n.name }),
                    (0, a.jsxs)(u.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        className: b.oQ,
                        children: [
                            null != n.memberCount
                                ? (0, a.jsxs)("span", {
                                      className: b.JL,
                                      children: [
                                          (0, a.jsx)(o.n, { size: "sm" }),
                                          n.memberCount,
                                          null != n.maxMembers ? `/${n.maxMembers}` : "",
                                      ],
                                  })
                                : null,
                            null != n.memberCount && null != m ? (0, a.jsx)("span", { children: "\u2022" }) : null,
                            null != m ? (0, a.jsx)("span", { children: h.intl.format(m, { noun: d }) }) : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let {
        linkableGameOrganizations: n,
        application: l,
        selectedGuild: t,
        setSelectedGuild: i,
        organizationNoun: s,
    } = e;
    return (0, a.jsx)("div", {
        className: b.Kb,
        children: n?.map((e) =>
            (0, a.jsx)(
                j,
                {
                    gameOrganization: e,
                    application: l,
                    onClick: () => i(e),
                    isSelected: t?.id === e.id,
                    organizationNoun: s,
                },
                e.id,
            ),
        ),
    });
}
function k(e) {
    let { game: n, ...l } = e,
        i = n.getOfficialApplicationId(),
        s = (0, p.A)({ displayNoun: null, lowercase: !1 }),
        { data: r, isLoading: u } = (function (e) {
            let [n, l] = (0, t.useState)([]),
                [a, i] = (0, t.useState)(!0),
                [s, r] = (0, t.useState)(null);
            return (
                (0, t.useEffect)(() => {
                    (async () => {
                        if (null == e) {
                            (l([]), i(!1));
                            return;
                        }
                        try {
                            i(!0);
                            let n = await (0, f.B)(e);
                            l(n);
                        } catch (e) {
                            r(e);
                        } finally {
                            i(!1);
                        }
                    })();
                }, [e]),
                { data: n, isLoading: a, error: s }
            );
        })(i),
        { data: o, isLoading: x } = (0, m.YY)(i),
        [g, b] = (0, t.useState)(null),
        [j, k] = (0, t.useState)("SELECT_ORGANIZATION"),
        C = [
            {
                stepKey: "SELECT_ORGANIZATION",
                modalProps: { title: h.intl.formatToPlainString(S.default.GdDUCS, { noun: s }) },
                body:
                    u || x
                        ? (0, a.jsx)(d.y, {})
                        : "SELECT_ORGANIZATION" === j
                          ? (0, a.jsx)(N, {
                                linkableGameOrganizations: r,
                                application: o,
                                selectedGuild: g,
                                organizationNoun: s,
                                setSelectedGuild: b,
                            })
                          : null,
                nextEnabled: null != g,
            },
        ];
    return (0, a.jsx)(c.t, { ...l, steps: C, currentStepKey: j, onStepChange: k });
}
