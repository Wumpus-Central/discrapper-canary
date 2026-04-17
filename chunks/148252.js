n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    i = n(397927),
    r = n(985018),
    o = n(964421);
function c(e) {
    let { mediaItems: t, labels: n, selectedIndex: a, onSelectIndex: c } = e;
    return t.length <= 1
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(i.Text, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: r.intl.string(r.t.U7DAV9),
                  }),
                  (0, l.jsx)("div", {
                      className: o.Vg,
                      children: t.map((e, t) =>
                          (0, l.jsx)(
                              i.DUT,
                              {
                                  className: s()(o.xn, { [o.Y4]: t === a }),
                                  onClick: () => c(t),
                                  children: (0, l.jsx)("img", {
                                      className: o.q_,
                                      src:
                                          null != e.thumbnailSrc
                                              ? e.thumbnailSrc
                                              : "video" === e.type
                                                ? e.videoThumbnailSrc
                                                : e.src,
                                      alt: n?.[t] ?? "",
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
