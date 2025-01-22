var i = r(585483),
    a = r(5967),
    o = r(933513),
    s = r(981631);
n.Z = {
    init() {
        document.addEventListener('paste', (e) => {
            !(0, o.Z)((0, a.uB)(e)) && i.S.dispatchToLastSubscribed(s.CkL.GLOBAL_CLIPBOARD_PASTE, { event: e });
        });
    }
};
