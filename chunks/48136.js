n.d(e, { A: () => O });
var s = n(627968),
    i = n(792620),
    l = n(412703),
    a = n(821609),
    r = n(890687),
    o = n(590202),
    c = n(814793),
    u = n(753386),
    d = n(545986),
    C = n(654487),
    h = n(985018);
let A = function (t) {
    let { quest: e, taskType: n, analyticsCtxQuestContent: A, analyticsCtxSourceQuestContent: T, size: E } = t,
        g = (0, r.fc)(e),
        f = (function (t, e, n, s) {
            let { launchInGameActivity: l } = (0, r.zW)(t);
            return (0, i.K$)(t)
                ? () => {
                      (0, d.Fy)(t);
                  }
                : (0, i.IO)(t)
                  ? () => {
                        (0, d.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
                    }
                  : (0, c.vA)(t)
                    ? () => {
                          l();
                      }
                    : null;
        })(e, A, T, l.o.VIDEO.has(n) ? o.Cy.WATCH_VIDEO : (0, c.vA)(e) ? o.Cy.START_QUEST : o.Cy.ACCEPT_QUEST),
        x = (0, d.Oz)(e),
        m = (function (t, e) {
            if ((0, i.K$)(t)) return h.intl.string(h.t.IsH2Sp);
            if ((0, i.IO)(t)) return (0, u.WM)(e);
            if ((0, c.vA)(t))
                return (0, i.Ov)(t)
                    ? h.intl.string(h.t.CkUzLd)
                    : (0, i.vl)(t)
                      ? t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)
                          ? h.intl.string(h.t["+qoymD"])
                          : h.intl.string(h.t.E4kW5O)
                      : h.intl.string(h.t.l7E81v);
            return h.intl.string(h.t["9KoPyB"]);
        })(e, g);
    return null == f
        ? (0, s.jsx)(a.$, { size: E, variant: "secondary", disabled: !0, text: m, fullWidth: !0 })
        : (0, s.jsx)(a.$, { size: E, variant: "primary", onClick: f, text: m, icon: x, fullWidth: !0 });
};
var T = n(17928),
    E = n(862482),
    g = n(775602),
    f = n(178540),
    x = n(507107),
    m = n(18437),
    I = n(971649),
    p = n(901406),
    v = n(201805),
    _ = n(79545),
    N = n(263752);
function w(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
        } = t,
        c = (0, m.Ut)(),
        u = (0, T.bG)([g.A], () => g.A.useReducedMotion),
        d = (0, v.Xf)({ useReducedMotion: u }),
        C = (0, f.O)((t) => t.setErrorHints),
        { startingConsoleQuest: A, startConsoleQuest: x } = (0, r.Wj)({
            questId: e.id,
            beforeRequest: () => {
                d.startAnimation(),
                    c({
                        questId: e.id,
                        questContent: n,
                        questContentCTA: o.Cy.DEFIBRILLATOR,
                        questContentPosition: l,
                        questContentRowIndex: a,
                        sourceQuestContent: i,
                    });
            },
            afterRequest: (t) => {
                d.stopAnimation(), C(e.id, t);
            },
        });
    return (0, s.jsx)(E.$n, {
        "data-migration-pending": !0,
        color: E.XD.PRIMARY,
        onClick: x,
        disabled: A,
        className: N.x,
        children: (0, s.jsxs)("div", { className: N.t, children: [d.render(), h.intl.string(h.t.nPThNb)] }),
    });
}
function y(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: u,
            size: d,
        } = t,
        C = (0, r.RR)({ quest: e }),
        A = (0, I.vU)()?.getId(),
        T = (0, r.Vn)(e),
        E = (0, r.fc)(e),
        [g, f, m] = (0, r.Qo)(e, E);
    return T || g === x.X0.DESKTOP
        ? (0, s.jsx)(a.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: h.intl.string(h.t["9KoPyB"]),
              fullWidth: !0,
          })
        : C && n === _.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(a.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                    (0, p.se)(
                        { quest: e },
                        {
                            content: i,
                            ctaContent: o.Cy.CONNECT_CONSOLE,
                            position: c,
                            rowIndex: u,
                            impressionId: A,
                            sourceQuestContent: l,
                        },
                    );
                },
                text: h.intl.string(h.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(w, {
                quest: e,
                analyticsCtxQuestContent: i,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: c,
                analyticsCtxQuestContentRowIndex: u,
            });
}
let M = function (t) {
        let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: c,
            size: u,
        } = t;
        if ((0, i.g5)(e) && n === _.V3.QUEST_HOME_TILE_FOOTER)
            return (0, s.jsx)(y, {
                quest: e,
                surface: n,
                size: u,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: c,
            });
        let d = h.intl.string(h.t["9KoPyB"]);
        return (0, s.jsx)(a.$, { size: u, variant: "secondary", disabled: !0, text: d, fullWidth: !0 });
    },
    O = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: l,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: c,
            size: u,
        } = t;
        return (0, i.t)({ quest: e }) || (0, i.g5)(e)
            ? (0, s.jsx)(M, {
                  quest: e,
                  surface: l,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: c,
              })
            : (0, s.jsx)(A, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: r,
              });
    };
