t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(780384),
    s = t(481060),
    o = t(410030),
    d = t(44315),
    c = t(208567),
    u = t(981631),
    m = t(351079);
let x = u.Ilk.PRIMARY_400,
    h = u.Ilk.PRIMARY_500;
function g(e) {
    let { enabled: n, imageClassName: t, iconWrapperClassName: i, ...u } = e,
        g = (0, o.ZP)(),
        v = (0, a.wj)(g) ? x : h,
        j = {
            height: 18,
            width: 18,
            color: (0, d.Lq)(v)
        };
    return (0, l.jsx)(c.Z, {
        className: r()({
            [m.avatarUploader]: n,
            [m.avatarUploaderDisabled]: !n
        }),
        imageClassName: r()(t, m.avatarUploaderInnerSquare, { [m.avatarUploaderInnerSquareDisabled]: !n }),
        icon:
            null != u.image && '' !== u.image
                ? (0, l.jsx)(s.PencilIcon, {
                      size: 'custom',
                      ...j
                  })
                : (0, l.jsx)(s.ImagePlusIcon, {
                      size: 'custom',
                      ...j
                  }),
        iconClassName: r()(m.avatarUploadIcon, m.hideDefaultIcon),
        iconWrapperClassName: i,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}
