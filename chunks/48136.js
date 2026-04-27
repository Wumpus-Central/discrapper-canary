n.d(t, { A: () => D });
var i = n(627968),
    r = n(792620),
    s = n(412703),
    l = n(821609),
    a = n(890687),
    d = n(590202),
    o = n(814793),
    _ = n(753386),
    u = n(545986),
    c = n(654487),
    E = n(985018);
let C = function (e) {
    let { quest: t, taskType: n, analyticsCtxQuestContent: C, analyticsCtxSourceQuestContent: h, size: T } = e,
        A = (0, a.fc)(t),
        I = (function (e, t, n, i) {
            let { launchInGameActivity: s } = (0, a.zW)(e);
            return (0, r.K$)(e)
                ? () => {
                      (0, u.Fy)(e);
                  }
                : (0, r.IO)(e)
                  ? () => {
                        (0, u.d5)({ quest: e, questContent: t, sourceQuestContent: n, sourceQuestContentCTA: i });
                    }
                  : (0, o.vA)(e)
                    ? () => {
                          s();
                      }
                    : null;
        })(t, C, h, s.o.VIDEO.has(n) ? d.Cy.WATCH_VIDEO : (0, o.vA)(t) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST),
        f = (0, u.Oz)(t),
        m = (function (e, t) {
            if ((0, r.K$)(e)) return E.intl.string(E.t.IsH2Sp);
            if ((0, r.IO)(e)) return (0, _.WM)(t);
            if ((0, o.vA)(e))
                return (0, r.Ov)(e)
                    ? E.intl.string(E.t.CkUzLd)
                    : (0, r.vl)(e)
                      ? e.config.features.includes(c.Li.CLOUD_GAMING_ACTIVITY)
                          ? E.intl.string(E.t["+qoymD"])
                          : E.intl.string(E.t.E4kW5O)
                      : E.intl.string(E.t.l7E81v);
            return E.intl.string(E.t["9KoPyB"]);
        })(t, A);
    return null == I
        ? (0, i.jsx)(l.$, { size: T, variant: "secondary", disabled: !0, text: m, fullWidth: !0 })
        : (0, i.jsx)(l.$, { size: T, variant: "primary", onClick: I, text: m, icon: f, fullWidth: !0 });
};
var h = n(17928),
    T = n(862482),
    A = n(775602),
    I = n(178540),
    f = n(507107),
    m = n(18437),
    g = n(971649),
    p = n(901406),
    S = n(201805),
    x = n(79545),
    N = n(263752);
function v(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: l,
        } = e,
        o = (0, m.Ut)(),
        _ = (0, h.bG)([A.A], () => A.A.useReducedMotion),
        u = (0, S.Xf)({ useReducedMotion: _ }),
        c = (0, I.O)((e) => e.setErrorHints),
        { startingConsoleQuest: C, startConsoleQuest: f } = (0, a.Wj)({
            questId: t.id,
            beforeRequest: () => {
                u.startAnimation(),
                    o({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: d.Cy.DEFIBRILLATOR,
                        questContentPosition: s,
                        questContentRowIndex: l,
                        sourceQuestContent: r,
                    });
            },
            afterRequest: (e) => {
                u.stopAnimation(), c(t.id, e);
            },
        });
    return (0, i.jsx)(T.$n, {
        "data-migration-pending": !0,
        color: T.XD.PRIMARY,
        onClick: f,
        disabled: C,
        className: N.x,
        children: (0, i.jsxs)("div", { className: N.t, children: [u.render(), E.intl.string(E.t.nPThNb)] }),
    });
}
function b(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: s,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: _,
            size: u,
        } = e,
        c = (0, a.RR)({ quest: t }),
        C = (0, g.vU)()?.getId(),
        h = (0, a.Vn)(t),
        T = (0, a.fc)(t),
        [A, I, m] = (0, a.Qo)(t, T);
    return h || A === f.X0.DESKTOP
        ? (0, i.jsx)(l.$, {
              variant: "secondary",
              size: u,
              disabled: !0,
              text: E.intl.string(E.t["9KoPyB"]),
              fullWidth: !0,
          })
        : c && n === x.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(l.$, {
                size: u,
                variant: "secondary",
                onClick: () => {
                    (0, p.se)(
                        { quest: t },
                        {
                            content: r,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: o,
                            rowIndex: _,
                            impressionId: C,
                            sourceQuestContent: s,
                        },
                    );
                },
                text: E.intl.string(E.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(v, {
                quest: t,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: s,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: _,
            });
}
let O = function (e) {
        let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: o,
            size: _,
        } = e;
        if ((0, r.g5)(t) && n === x.V3.QUEST_HOME_TILE_FOOTER)
            return (0, i.jsx)(b, {
                quest: t,
                surface: n,
                size: _,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: o,
            });
        let u = E.intl.string(E.t["9KoPyB"]);
        return (0, i.jsx)(l.$, { size: _, variant: "secondary", disabled: !0, text: u, fullWidth: !0 });
    },
    D = function (e) {
        let {
            quest: t,
            taskType: n,
            surface: s,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: o,
            size: _,
        } = e;
        return (0, r.t)({ quest: t }) || (0, r.g5)(t)
            ? (0, i.jsx)(O, {
                  quest: t,
                  surface: s,
                  size: _,
                  analyticsCtxQuestContent: l,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: d,
                  analyticsCtxQuestContentRowIndex: o,
              })
            : (0, i.jsx)(C, {
                  quest: t,
                  taskType: n,
                  size: _,
                  analyticsCtxQuestContent: l,
                  analyticsCtxSourceQuestContent: a,
              });
    };
