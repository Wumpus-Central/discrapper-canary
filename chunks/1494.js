t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) =>
        `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    rangeReversed: "開始日は終了日より前にする必要があります。",
    rangeUnderflow: (e) =>
        `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    unavailableDate: "選択した日付は使用できません。",
};
