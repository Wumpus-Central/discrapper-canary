n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    i = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(148571);
function h(e) {
    let { channel: t, threadIds: n, startThread: a, goToThread: h } = e,
        g = l.useCallback(
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
        ? (0, r.jsx)(i.Z, {
              channel: t,
              header: d.intl.string(d.t.HgTQ8v),
              startThread: a
          })
        : (0, r.jsx)(o.aVo, {
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
