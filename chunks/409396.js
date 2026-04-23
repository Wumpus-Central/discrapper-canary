t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) =>
        `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    rangeReversed: "시작일은 종료일 이전이어야 합니다.",
    rangeUnderflow: (e) =>
        `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    unavailableDate: "선택한 날짜를 사용할 수 없습니다.",
};
