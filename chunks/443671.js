n.d(t, {
    Z: function () {
        return h;
    }
});
var a = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    i = n(481060),
    o = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(773159);
function h(e) {
    let { channel: t, threadIds: n, startThread: r, goToThread: h } = e,
        m = l.useCallback(
            (e) =>
                (0, a.jsx)(
                    c.Z,
                    {
                        threadId: n[e.row],
                        goToThread: h
                    },
                    ''.concat(e.section, '-').concat(e.row)
                ),
            [n, h]
        );
    return 0 === n.length
        ? (0, a.jsx)(o.Z, {
              channel: t,
              header: d.intl.string(d.t.HgTQ8v),
              startThread: r
          })
        : (0, a.jsx)(i.List, {
              className: s()(u.list, u.activeThreadsList),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: m,
              renderSection: () => null,
              chunkSize: 20
          });
}
