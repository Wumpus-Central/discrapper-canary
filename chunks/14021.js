t.d(s, { A: () => N });
var a = t(477900),
    l = t(582128),
    i = t(172218),
    n = t(534514),
    d = t(834730),
    r = t(95362),
    c = t(289873),
    o = t(503698),
    u = t.n(o),
    m = t(778712),
    x = t(866665),
    h = t(939249),
    j = t(97808),
    v = t(658675),
    b = t(854627),
    f = t(879308);
function p(e) {
    let { user: s, checked: t, onChange: i, disabled: n, tooltipConfig: r } = e,
        c = l.useRef(null),
        { avatarSrc: o, eventHandlers: p } = (0, b.A)({ userId: s?.id, size: m._3.SIZE_32 }),
        k = s.globalName ?? s.username;
    return (0, a.jsx)(x.m, {
        text: r?.isActive(s, n) ? r.text(s) : null,
        position: "top",
        anchorRef: c,
        asContainer: !0,
        children: (0, a.jsxs)(h.D, {
            className: u()(f.kL, { [f.vk]: !n }),
            onClick: function () {
                n || i(s, !t);
            },
            children: [
                (0, a.jsx)("div", {
                    className: f.dj,
                    children: (0, a.jsx)(j.eu, {
                        className: u()({ [f.SU]: n }),
                        src: o,
                        "aria-label": k,
                        size: m._3.SIZE_32,
                        ...p,
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: f.QV,
                    children: [
                        (0, a.jsx)(d.E, {
                            className: f.nT,
                            color: n ? "text-muted" : "text-default",
                            variant: "body-md/semibold",
                            children: k,
                        }),
                        (0, a.jsx)(d.E, {
                            className: f.nT,
                            color: n ? "text-muted" : "text-subtle",
                            variant: "body-xs/normal",
                            children: s.username,
                        }),
                    ],
                }),
                (0, a.jsx)("div", { ref: c, className: f.kv, children: (0, a.jsx)(v.P, { checked: t, disabled: n }) }),
            ],
        }),
    });
}
var k = t(996118);
function N(e) {
    let {
            users: s,
            isUserSelected: t,
            onSelectionChange: l,
            isFetching: o,
            onFetchMore: u,
            isUserDisabled: m,
            searchQuery: x = "",
            emptySearchContent: h,
            className: j,
            tooltipConfig: v,
        } = e,
        b = (0, i.K)((e) => {
            e && !o && u?.();
        });
    return x.length > 0 && 0 === s.length && null != h
        ? (0, a.jsxs)("div", {
              className: k.t,
              children: [
                  (0, a.jsx)(n.D, { variant: "heading-sm/semibold", color: "text-strong", children: h.header }),
                  (0, a.jsx)(d.E, { variant: "body-md/medium", color: "text-subtle", children: h.body }),
              ],
          })
        : (0, a.jsxs)(r.d_, {
              className: j,
              children: [
                  s.map((e) =>
                      (0, a.jsx)(
                          p,
                          { user: e, checked: t(e), disabled: !!m?.(e), onChange: l, tooltipConfig: v },
                          e.id,
                      ),
                  ),
                  o && (0, a.jsx)(c.y, {}),
                  (0, a.jsx)("div", { ref: b }),
              ],
          });
}
