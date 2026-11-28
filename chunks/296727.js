l.d(n, { default: () => N });
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
    p = l(669610),
    f = l(282831);
function x(e) {
    let { gameOrganization: n, application: l } = e;
    return (0, a.jsx)("img", { className: f.H, src: n.iconUrl ?? l?.getIconURL(96) ?? "", alt: n.name });
}
var h = l(652180),
    S = l(792996),
    g = l(809049);
function b(e) {
    let { gameOrganization: n, application: l, isSelected: i, displayNoun: d, onClick: c } = e,
        m = (0, t.useMemo)(() => {
            if (null != n.guildId) return h.default.fxZSL6;
            if (n.userIsBlockedFromLink) return h.default["0kSKEH"];
            let e = new Set(n.member.gameOrganizationRoleIds);
            if (!n.roles.some((n) => n.canLink && e.has(n.id))) return h.default.kIqT8Y;
        }, [n]);
    return (0, a.jsxs)(r.D, {
        className: s()(g.zJ, { [g.r9]: null != m, [g.wH]: i }),
        onClick: null == m ? c : void 0,
        children: [
            (0, a.jsx)(x, { gameOrganization: n, application: l }),
            (0, a.jsxs)("div", {
                className: g.gB,
                children: [
                    (0, a.jsx)(u.E, { variant: "body-md/normal", children: n.name }),
                    (0, a.jsxs)(u.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        className: g.oQ,
                        children: [
                            null != n.memberCount
                                ? (0, a.jsxs)("span", {
                                      className: g.JL,
                                      children: [
                                          (0, a.jsx)(o.GroupIcon, { size: "sm" }),
                                          n.memberCount,
                                          null != n.maxMembers ? `/${n.maxMembers}` : "",
                                      ],
                                  })
                                : null,
                            null != n.memberCount && null != m ? (0, a.jsx)("span", { children: "\u2022" }) : null,
                            null != m ? (0, a.jsx)("span", { children: S.intl.format(m, { displayNoun: d }) }) : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { linkableGameOrganizations: n, application: l, selectedGuild: t, setSelectedGuild: i, displayNoun: s } = e;
    return (0, a.jsx)("div", {
        className: g.Kb,
        children: n?.map((e) =>
            (0, a.jsx)(
                b,
                {
                    gameOrganization: e,
                    application: l,
                    onClick: () => i(e),
                    isSelected: t?.id === e.id,
                    displayNoun: s,
                },
                e.id,
            ),
        ),
    });
}
function N(e) {
    let { game: n, ...l } = e,
        i = n.getOfficialApplicationId(),
        s = "other",
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
                            let n = await (0, p.B)(e);
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
        { data: o, isLoading: f } = (0, m.YY)(i),
        [x, g] = (0, t.useState)(null),
        [b, N] = (0, t.useState)("SELECT_ORGANIZATION"),
        I = [
            {
                stepKey: "SELECT_ORGANIZATION",
                modalProps: { title: S.intl.formatToPlainString(h.default.GdDUCS, { displayNoun: s }) },
                body:
                    u || f
                        ? (0, a.jsx)(d.y, {})
                        : "SELECT_ORGANIZATION" === b
                          ? (0, a.jsx)(j, {
                                linkableGameOrganizations: r,
                                application: o,
                                selectedGuild: x,
                                displayNoun: s,
                                setSelectedGuild: g,
                            })
                          : null,
                nextEnabled: null != x,
            },
        ];
    return (0, a.jsx)(c.t, { ...l, steps: I, currentStepKey: b, onStepChange: N });
}
