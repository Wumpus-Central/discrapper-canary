n.d(t, { Z: () => c });
var i = n(955572),
    s = n(419954),
    l = n(253932),
    r = n(780964),
    a = n(985018);
let o = "cozy",
    d = "compact",
    c = (0, s.Qx)(r.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => a.intl.string(a.t.nKRoPv),
        useSubtitle: () => a.intl.string(a.t.QntEEG),
        useSearchTerms: () => [a.intl.string(a.t.ZEoGMd)],
        useOptions: () => [
            { name: a.intl.string(a.t.Jqj4cZ), value: o },
            { name: a.intl.string(a.t["1JNcPS"]), value: d },
        ],
        useValue: () => (l.hH.useSetting() ? d : o),
        setValue: (e) => {
            l.hH.updateSetting(e === d), (0, i.AC)();
        },
    });
