t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
    dateSelected: (e) => `${e.date} \u{3092}\u{9078}\u{629E}`,
    finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
    maximumDate: "最終利用可能日",
    minimumDate: "最初の利用可能日",
    next: "次へ",
    previous: "前へ",
    selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
    selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,
    startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
    todayDate: (e) => `\u{672C}\u{65E5}\u{3001}${e.date}`,
    todayDateSelected: (e) => `\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`,
};
