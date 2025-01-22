t.d(n, {
    Z: function () {
        return r;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(695346),
    u = t(981631);
function r(e, n) {
    a.qF.getSetting()
        ? (0, i.openModalLazy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('50506'), t.e('96211'), t.e('23217'), t.e('84605'), t.e('6380'), t.e('72181'), t.e('8016'), t.e('56630'), t.e('51269'), t.e('66711'), t.e('90508'), t.e('13351'), t.e('86282'), t.e('65840'), t.e('21628'), t.e('18543'), t.e('17938'), t.e('18101'), t.e('24207'), t.e('46097'), t.e('76540'), t.e('8739'), t.e('58059'), t.e('18895'), t.e('68445'), t.e('24391'), t.e('99393'), t.e('99008'), t.e('37229'), t.e('22646'), t.e('95393'), t.e('3940'), t.e('25183'), t.e('80284'), t.e('57322'), t.e('48923'), t.e('27936'), t.e('30419'), t.e('69174'), t.e('18824'), t.e('30203'), t.e('701')]).then(t.bind(t, 601572));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          onEnable: e,
                          videoEnabled: !1
                      });
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === u.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
              }
          )
        : null == e || e();
}
