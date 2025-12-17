n.d(t, { Z: () => h });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    i = n(487894),
    c = n(300234),
    u = n(388032),
    d = n(720754);
function h(e) {
    let { channel: t, threadIds: n, startThread: a, goToThread: h } = e,
        g = l.useCallback(
            (e) =>
                (0, r.jsx)(
                    c.Z,
                    {
                        threadId: n[e.row],
                        goToThread: h,
                    },
                    "".concat(e.section, "-").concat(e.row),
                ),
            [n, h],
        );
    return 0 === n.length
        ? (0, r.jsx)(i.Z, {
              channel: t,
              header: u.intl.string(u.t.HgTQ8p),
              startThread: a,
          })
        : (0, r.jsx)(o.aVo, {
              className: s()(d.list, d.activeThreadsList),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: g,
              renderSection: () => null,
              chunkSize: 20,
          });
}
