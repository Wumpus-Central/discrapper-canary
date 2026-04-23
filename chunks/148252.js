l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var a = l(503698),
    i = l.n(a),
    r = l(834730),
    s = l(939249),
    o = l(985018),
    d = l(964421);
function c(e) {
    let { mediaItems: t, labels: l, selectedIndex: a, onSelectIndex: c } = e;
    return t.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: d.kL,
              children: [
                  (0, n.jsx)(r.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: o.intl.string(o.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: d.Vg,
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              s.D,
                              {
                                  className: i()(d.xn, { [d.Y4]: t === a }),
                                  onClick: () => c(t),
                                  "aria-label": l?.[t],
                                  "aria-pressed": t === a,
                                  children: (0, n.jsx)("img", {
                                      className: d.q_,
                                      src:
                                          null != e.thumbnailSrc
                                              ? e.thumbnailSrc
                                              : "video" === e.type
                                                ? e.videoThumbnailSrc
                                                : e.src,
                                      alt: "",
                                      draggable: !1,
                                  }),
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
