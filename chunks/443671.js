n.d(t, { Z: () => h });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    i = n(481060),
    o = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(524855);
function h(e) {
    let { channel: t, threadIds: n, startThread: l, goToThread: h } = e,
        g = a.useCallback(
            (e) =>
                (0, r.jsx)(
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
        ? (0, r.jsx)(o.Z, {
              channel: t,
              header: d.NW.string(d.t.HgTQ8v),
              startThread: l
          })
        : (0, r.jsx)(i.aVo, {
              className: s()(u.list, u.activeThreadsList),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: g,
              renderSection: () => null,
              chunkSize: 20
          });
}
