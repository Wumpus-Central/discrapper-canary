o.d(n, { default: () => p });
var t = o(200651);
o(192379);
var a = o(990547),
    i = o(399606),
    r = o(481060),
    s = o(1596),
    c = o(922611),
    l = o(478923),
    u = o(594174),
    d = o(626135),
    f = o(51144),
    m = o(981631),
    _ = o(388032);
function p(e) {
    let { transitionState: n, onClose: o, userId: p, onCancel: C, confirmBlock: b } = e,
        h = (0, i.e7)([u.default], () => u.default.getUser(p)),
        N = f.ZP.useName(h),
        x = (0, c.Do)({ location: 'confirm_block_user_modal' }),
        O = () => {
            b(), d.default.track(m.rMx.BLOCK_USER_CONFIRMED);
        };
    if (null != h)
        return x
            ? (0, t.jsx)(l.default, {
                  transitionState: n,
                  user: h,
                  onBlock: O,
                  onClose: o,
                  onCancel: C
              })
            : (0, t.jsx)(r.ConfirmModal, {
                  header: _.NW.formatToPlainString(_.t.x5pOn5, { name: N }),
                  confirmText: _.NW.string(_.t.l4EmaW),
                  cancelText: _.NW.string(_.t['ETE/oK']),
                  onConfirm: O,
                  onClose: o,
                  onCancel: C,
                  transitionState: n,
                  impression: { impressionName: a.ImpressionNames.BLOCK_USER_CONFIRMATION },
                  children: (0, t.jsx)(s.Z, {})
              });
}
