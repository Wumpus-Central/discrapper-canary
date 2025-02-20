n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(695346),
    a = n(572004),
    c = n(388032);
function o(e, t) {
    let n = t.primarySkuId,
        o = l.Sb.useSetting();
    return !__OVERLAY__ && o && a.wS
        ? (0, r.jsxs)(i.sNh, {
              id: 'application-dev',
              label: c.NW.string(c.t.OpuAlJ),
              action: () => (0, a.JG)(t.id),
              children: [
                  (0, r.jsx)(i.sNh, {
                      id: 'app-id',
                      label: c.NW.string(c.t.qSHsho),
                      action: () => (0, a.JG)(t.id)
                  }),
                  null != e
                      ? (0, r.jsx)(i.sNh, {
                            id: 'branch-id',
                            label: c.NW.string(c.t.g7oyys),
                            action: () => (0, a.JG)(e.branchId)
                        })
                      : null,
                  null != n
                      ? (0, r.jsx)(i.sNh, {
                            id: 'sku-id',
                            label: c.NW.string(c.t.hReUdH),
                            action: () => (0, a.JG)(n)
                        })
                      : null
              ]
          })
        : null;
}
