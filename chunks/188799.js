t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
    dateSelected: (e) => `${e.date} \u{C120}\u{D0DD}\u{B428}`,
    finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
    maximumDate: "마지막으로 사용 가능한 일자",
    minimumDate: "처음으로 사용 가능한 일자",
    next: "다음",
    previous: "이전",
    selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
    selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,
    startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
    todayDate: (e) => `\u{C624}\u{B298}, ${e.date}`,
    todayDateSelected: (e) => `\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`,
};
