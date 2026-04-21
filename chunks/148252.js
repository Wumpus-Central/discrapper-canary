l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    i = l(397927),
    r = l(985018),
    o = l(964421);
function c(e) {
    let { mediaItems: t, labels: l, selectedIndex: a, onSelectIndex: c } = e;
    return t.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, n.jsx)(i.Text, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: r.intl.string(r.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: o.Vg,
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              i.DUT,
                              {
                                  className: s()(o.xn, { [o.Y4]: t === a }),
                                  onClick: () => c(t),
                                  "aria-label": l?.[t],
                                  "aria-pressed": t === a,
                                  children: (0, n.jsx)("img", {
                                      className: o.q_,
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
