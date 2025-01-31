t.d(i, { Z: () => c });
var l = t(200651);
t(192379);
var a = t(481060),
    e = t(695346),
    r = t(572004),
    d = t(388032);
function c(n, i) {
    let t = i.primarySkuId,
        c = e.Sb.useSetting();
    return !__OVERLAY__ && c && r.wS
        ? (0, l.jsxs)(a.sNh, {
              id: 'application-dev',
              label: d.intl.string(d.t.OpuAlJ),
              action: () => (0, r.JG)(i.id),
              children: [
                  (0, l.jsx)(a.sNh, {
                      id: 'app-id',
                      label: d.intl.string(d.t.qSHsho),
                      action: () => (0, r.JG)(i.id)
                  }),
                  null != n
                      ? (0, l.jsx)(a.sNh, {
                            id: 'branch-id',
                            label: d.intl.string(d.t.g7oyys),
                            action: () => (0, r.JG)(n.branchId)
                        })
                      : null,
                  null != t
                      ? (0, l.jsx)(a.sNh, {
                            id: 'sku-id',
                            label: d.intl.string(d.t.hReUdH),
                            action: () => (0, r.JG)(t)
                        })
                      : null
              ]
          })
        : null;
}
