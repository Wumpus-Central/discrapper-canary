"use strict";
n.d(t, { Ay: () => p, UE: () => _, gA: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(672979),
    s = n(20805),
    o = n(409626),
    l = n(692969),
    u = n(67518),
    c = n(652215),
    d = n(985018);
function _(e) {
    let { user: t, activity: n, entry: r } = e;
    return null != r
        ? { applicationId: (0, s.zD)(r) ? r.extra.application_id : void 0, sourceUserId: r.author_id }
        : null != n
          ? {
                applicationId: n.type === c.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function f(e) {
    let { user: t, activity: o, entry: l } = e,
        { applicationId: c } = _({ activity: o, entry: l, user: t }),
        f = (0, u.n)(c),
        p = null != o && (0, a.A)(o),
        h = null != l && (0, s.zD)(l);
    if (p || h) {
        let e = () =>
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("27495").then(n.bind(n, 651930));
                if (null != o) return (t) => (0, r.jsx)(e, { ...t, detectedActivity: o, onSubmitted: () => {} });
                if (null != l && (0, s.zD)(l)) {
                    let t = { name: l.extra.game_name, application_id: l.extra.application_id };
                    return (n) => (0, r.jsx)(e, { ...n, detectedActivity: t, onSubmitted: () => {} });
                }
                return (t) => (0, r.jsx)(e, { ...t, onSubmitted: () => {} });
            });
        return (0, r.jsx)(i.Drp, { id: "game-detection-report-issue", label: d.intl.string(d.t.qP2cXd), action: e });
    }
    return f;
}
function p(e) {
    let { user: t, activity: n, entry: a, onAction: s, isMenuOpen: u, appContext: c } = e,
        { applicationId: f, sourceUserId: p } = _({ activity: n, entry: a, user: t }),
        h = (0, l.A)({
            location: "UserProfileActivityContextMenu",
            source: o.Ob.UserProfileCardContextMenu,
            trackEntryPointImpression: u,
            applicationId: f,
            sourceUserId: p,
            appContext: c,
        });
    return null == h
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (e) => {
                  s?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), h(e);
              },
          });
}
