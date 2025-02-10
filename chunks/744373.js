i.d(n, { default: () => E });
var e = i(200651);
i(192379);
var r = i(990547),
    o = i(399606),
    s = i(481060),
    a = i(1596),
    l = i(922611),
    c = i(478923),
    d = i(594174),
    u = i(626135),
    m = i(51144),
    x = i(981631),
    f = i(388032);
function E(t) {
    let { transitionState: n, onClose: i, userId: E, onCancel: I, confirmBlock: N } = t,
        h = (0, o.e7)([d.default], () => d.default.getUser(E)),
        C = m.ZP.useName(h),
        T = (0, l.Do)({ location: 'confirm_block_user_modal' }),
        _ = () => {
            N(), u.default.track(x.rMx.BLOCK_USER_CONFIRMED);
        };
    if (null != h)
        return T
            ? (0, e.jsx)(c.default, {
                  transitionState: n,
                  user: h,
                  onBlock: _,
                  onClose: i,
                  onCancel: I
              })
            : (0, e.jsx)(s.ConfirmModal, {
                  header: f.intl.formatToPlainString(f.t.x5pOn5, { name: C }),
                  confirmText: f.intl.string(f.t.l4EmaW),
                  cancelText: f.intl.string(f.t['ETE/oK']),
                  onConfirm: _,
                  onClose: i,
                  onCancel: I,
                  transitionState: n,
                  impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
                  children: (0, e.jsx)(a.Z, {})
              });
}
