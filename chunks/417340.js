t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) =>
        `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
    rangeReversed: "开始日期必须早于结束日期。",
    rangeUnderflow: (e) =>
        `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
    unavailableDate: "所选日期不可用。",
};
