n.d(t, { Z: () => u });
var i = n(955572),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(985018);
let o = "cozy",
    d = "compact",
    u = (0, s.Qx)(a.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => r.intl.string(r.t.nKRoPv),
        useSubtitle: () => r.intl.string(r.t.QntEEG),
        useSearchTerms: () => [r.intl.string(r.t.ZEoGMd)],
        useOptions: () => [
            { name: r.intl.string(r.t.Jqj4cZ), value: o },
            { name: r.intl.string(r.t["1JNcPS"]), value: d },
        ],
        useValue: () => (l.hH.useSetting() ? d : o),
        setValue: (e) => {
            l.hH.updateSetting(e === d), (0, i.AC)();
        },
    });
