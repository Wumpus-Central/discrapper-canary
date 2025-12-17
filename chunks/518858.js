n.d(t, { Z: () => h });
var i = n(54381),
    r = n(473749),
    s = n(512722),
    l = n.n(s),
    a = n(481060),
    c = n(299206),
    o = n(695346),
    u = n(601964),
    d = n(768581),
    g = n(572004),
    b = n(796762),
    p = n(981631),
    S = n(388032);
function h(e) {
    let t = o.Sb.useSetting(),
        { tidaWebformEnabled: n } = b.Z.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        s = (0, c.Z)({
            id: e.id,
            label: S.intl.string(S.t["94lLD7"]),
        }),
        h = r.useCallback(() => {
            let t = (0, u.EB)(e, p.dGM, !0);
            l()(null != t, "cannot copy null icon URL"), (0, g.JG)(t);
        }, [e]),
        f = r.useCallback(() => {
            let t = d.ZP.getGuildBannerURL(
                {
                    id: e.id,
                    banner: e.banner,
                },
                !0,
            );
            l()(null != t, "cannot copy null banner URL"), (0, g.JG)(t);
        }, [e]),
        E = r.useCallback(() => {
            (0, g.JG)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && t && g.wS && null != e.id
        ? n
            ? (0, i.jsxs)(a.sNh, {
                  id: "copy-server-info",
                  label: S.intl.string(S.t["rka/KS"]),
                  children: [
                      (0, i.jsx)(a.sNh, {
                          id: "copy-server-id",
                          label: S.intl.string(S.t["94lLD7"]),
                          action: E,
                          icon: a.VuL,
                      }),
                      null != e.icon &&
                          (0, i.jsx)(a.sNh, {
                              id: "copy-server-icon-link",
                              label: S.intl.string(S.t["7H30wR"]),
                              action: h,
                          }),
                      null != e.banner &&
                          (0, i.jsx)(a.sNh, {
                              id: "copy-server-banner-link",
                              label: S.intl.string(S.t["2FoUnk"]),
                              action: f,
                          }),
                  ],
              })
            : s
        : null;
}
