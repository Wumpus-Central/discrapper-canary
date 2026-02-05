i.d(n, { A: () => a });
var e = i(981737);
let a = {
    ordinalNumber: function (t, n) {
        var i = Number(t),
            e = null == n ? void 0 : n.unit;
        if ("quarter" === e)
            switch (i) {
                case 1:
                    return "I";
                case 2:
                    return "II";
                case 3:
                    return "III";
                case 4:
                    return "IV";
            }
        else if ("day" === e)
            switch (i) {
                case 1:
                    return "thứ 2";
                case 2:
                    return "thứ 3";
                case 3:
                    return "thứ 4";
                case 4:
                    return "thứ 5";
                case 5:
                    return "thứ 6";
                case 6:
                    return "thứ 7";
                case 7:
                    return "chủ nhật";
            }
        else if ("week" === e)
            if (1 === i) return "thứ nhất";
            else return "thứ " + i;
        else if ("dayOfYear" === e)
            if (1 === i) return "đầu ti\xean";
            else return "thứ " + i;
        return String(i);
    },
    era: (0, e.A)({
        values: {
            narrow: ["TCN", "SCN"],
            abbreviated: ["trước CN", "sau CN"],
            wide: ["trước C\xf4ng Nguy\xean", "sau C\xf4ng Nguy\xean"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, e.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["Qu\xfd 1", "Qu\xfd 2", "Qu\xfd 3", "Qu\xfd 4"],
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["qu\xfd I", "qu\xfd II", "qu\xfd III", "qu\xfd IV"],
        },
        defaultFormattingWidth: "wide",
        argumentCallback: function (t) {
            return t - 1;
        },
    }),
    month: (0, e.A)({
        values: {
            narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            abbreviated: [
                "Thg 1",
                "Thg 2",
                "Thg 3",
                "Thg 4",
                "Thg 5",
                "Thg 6",
                "Thg 7",
                "Thg 8",
                "Thg 9",
                "Thg 10",
                "Thg 11",
                "Thg 12",
            ],
            wide: [
                "Th\xe1ng Một",
                "Th\xe1ng Hai",
                "Th\xe1ng Ba",
                "Th\xe1ng Tư",
                "Th\xe1ng Năm",
                "Th\xe1ng S\xe1u",
                "Th\xe1ng Bảy",
                "Th\xe1ng T\xe1m",
                "Th\xe1ng Ch\xedn",
                "Th\xe1ng Mười",
                "Th\xe1ng Mười Một",
                "Th\xe1ng Mười Hai",
            ],
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            abbreviated: [
                "thg 1",
                "thg 2",
                "thg 3",
                "thg 4",
                "thg 5",
                "thg 6",
                "thg 7",
                "thg 8",
                "thg 9",
                "thg 10",
                "thg 11",
                "thg 12",
            ],
            wide: [
                "th\xe1ng 01",
                "th\xe1ng 02",
                "th\xe1ng 03",
                "th\xe1ng 04",
                "th\xe1ng 05",
                "th\xe1ng 06",
                "th\xe1ng 07",
                "th\xe1ng 08",
                "th\xe1ng 09",
                "th\xe1ng 10",
                "th\xe1ng 11",
                "th\xe1ng 12",
            ],
        },
        defaultFormattingWidth: "wide",
    }),
    day: (0, e.A)({
        values: {
            narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
            abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
            wide: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ S\xe1u", "Thứ Bảy"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, e.A)({
        values: {
            narrow: {
                am: "am",
                pm: "pm",
                midnight: "nửa đ\xeam",
                noon: "tr",
                morning: "sg",
                afternoon: "ch",
                evening: "tối",
                night: "đ\xeam",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
            },
            wide: {
                am: "SA",
                pm: "CH",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "am",
                pm: "pm",
                midnight: "nửa đ\xeam",
                noon: "tr",
                morning: "sg",
                afternoon: "ch",
                evening: "tối",
                night: "đ\xeam",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
            },
            wide: {
                am: "SA",
                pm: "CH",
                midnight: "nửa đ\xeam",
                noon: "giữa trưa",
                morning: "v\xe0o buổi s\xe1ng",
                afternoon: "v\xe0o buổi chiều",
                evening: "v\xe0o buổi tối",
                night: "v\xe0o ban đ\xeam",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
